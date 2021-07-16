// Alterar o titulo da página
window.document.title = "Filmes Populares";

/*
Para a exibição de todos os dados do arquivo de filmes iremos criar elementos
para a nossa página html por meio do javascript e ir adiconando os dados
a página
*/

//Vamos obter o ponto de partida para a inserção de novas tag html. Iniciaremos com o body
const body = document.body;

// Criar o elemento html chamado Header para adicionar ao body e ser o cabeçalho da nossa página
const header = document.createElement("header");

//Criar e adicionar o elemento h1 no header da página html
const h1 = document.createElement("h1");
//text para o h1
const txtH1 = document.createTextNode("Filmes Populares");
h1.appendChild(txtH1);
header.appendChild(h1);

//Vamos adicionar o elemento headear ao body
body.appendChild(header)

//Criar o elemento main(principal) da tela. Onde serão exibidos os dados os filmes
const main = document.createElement("main");

filmes.results.map((rs,ix)=>{
    var div = document.createElement("div");

    var img = document.createElement("img");
           img.src = `https://image.tmdb.org/t/p/w500${rs.poster_path}`;
    
    var h2 = document.createElement("h2");
    var txtH2 = document.createTextNode(rs.title);
           h2.appendChild(txtH2);
    
    var pMedia = document.createElement("p");
    var txtPMedia = document.createTextNode(`Votos: ${rs.vote_average}`);
            pMedia.appendChild(txtPMedia);
            pMedia.setAttribute("class","media");//aplicando uma classe css no paragrafo que guarda a média do filme
    
    var pSinopse = document.createElement("p");
    var txtSinopse = document.createTextNode(rs.overview);
            pSinopse.appendChild(txtSinopse);
            pSinopse.setAttribute("class","conteudo");

    div.appendChild(img);
    div.appendChild(h2);
    div.appendChild(pMedia);
    div.appendChild(pSinopse);



    main.appendChild(div);
    div.onmouseover=()=>{
        body.style.backgroundImage=`url(https://image.tmdb.org/t/p/w500${rs.poster_path})`;
        body.style.backgroundSize="100%";
        body.style.transitionTimingFunction="ease";
        body.style.transitionDuration="3s"
    }
    div.onmouseout=()=>{
        body.style.backgroundColor="rgb(255,255,255)"
    }
})


//adiciona main ao body
body.appendChild(main);

