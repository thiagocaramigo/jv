window.addEventListener("load",detalhesFilme);

var id = window.location.search.substring(4,10);

var h1 = document.getElementsByTagName("h1")[0];
var main = document.getElementById("detalhe");



function detalhesFilme(){
    fetch(`https://api.themoviedb.org/3/tv/popular?api_key=api_key=e8ee1b7136ab091a2fb872089bf3c840&language=pt-BR&page=1`)
    .then((response)=>response.json())
    .then((resultado)=>{
        
        var genero = "";
        resultado.genres.map((v,i)=>{
            genero += "<li>"+v.name+"</li>";
        });

        h1.innerHTML = resultado.name
        main.innerHTML=`<div id="img">
                        <img src=https://image.tmdb.org/t/p/w500${resultado.poster_path}>
                        </div>
                        <div id="content">
                            <h4>${resultado.name}<span class=texto>(${resultado.release_date.substring(0,4)})</span></h4>
                            <p id="genero">
                                <ul>${genero}</ul>
                            </p>
                            <p id="avaliacao">
                                ${resultado.vote_average}%
                            </p>
                            <p id="titulo_overview">
                                Sinopse
                            </p>
                            <p id="txtsinopse">
                                ${resultado.overview}
                            </p>                                
                        </div>
                        `;
            main.style.backgroundImage=`url(https://image.tmdb.org/t/p/w500${resultado.backdrop_path})`;
            main.style.backgroundSize="100%";
    })
    .catch((erro)=>console.error(`Erro ao tentar detalhar o filme -> ${erro}`))
}
