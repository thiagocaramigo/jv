// //Objetos em javascript


// //Exemplo de lista
// const cores = ["azul","amarelo","preto"];

// //Objeto
// const usuario1 = {
//     nomeUsuario:"helena",
//     senha:"123",
//     nivelAcesso:"admin",
//     foto:"admin.png",
//     criadoEm:"12/06/2010"
// }
// //console.log(usuario1.foto);

// const usuario2 = {
//     nomeUsuario:"Thais",
//     senha:"123",
//     nivelAcesso:"root",
//     foto:"root.png",
//     criadoEm:"12/02/2010"
// }


// const listaUsuarios = [usuario1,usuario2];
// // console.log(listaUsuarios[0].nomeUsuario)

// const listClient = [
//     client1={
//         name:"José Pereira",
//         age:"45",
//         email:"jose.pereira@terra.com.br"
//     },
//     client2={
//         name:"Márcia de Oliveira",
//         age:"32",
//         email:"marcia.olivera@uol.com.br"
//     }
// ];

// // listClient.forEach(function( value , ix ){
// //     console.log(value.name)
// // })

// // listClient.map(function(value,ix){
// //     console.log(value.name +" - "+ix) ;
// // })


// const prod1 = {
//     nome:"Mouse",
//     preco:"R$ 56,00",
//     quantidade:100
// };
// const prod2 = {
//     nome:"Teclado",
//     preco:"R$ 150,00",
//     quantidade:20
// };
// const prod3 = {
//     nome:"SSD",
//     preco:"R$ 560,00",
//     quantidade:10
// };

// const Client = {
//     name:"Paulo",
//     user:"paulo.almeida",
//     produtoComprado: prod2
// }

// const ClientHelena = {
//     name:"Helena",
//     user:usuario1,
//     produtoComprado:[prod1,prod2]
// }

// console.log(ClientHelena);

// var rs = "Nome do Cliente: "+ClientHelena.name;
// rs+=" - Produtos: ";
// rs+=ClientHelena.produtoComprado.map(function(value,ix){
//     return value.nome
// });
// rs+=" - Foto do Usuário: ";
// rs+=ClientHelena.user.foto;
// console.log(rs);


const main = document.querySelector("#main");

// filmes.results.map(function(dados, pos){
//     main.innerHTML+="<h2>"+dados.title+"</h2>";
// })

// refactor up code
// filmes.results.map((dados,pos)=>{
//     main.innerHTML+="<h2>"+dados.title+"</h2>"
// })

// refactor up code
filmes.results.map((v,i)=>{
        main.innerHTML +=  `<h2> ${v.title} <h2>`;
        main.innerHTML += `<img src=https://image.tmdb.org/t/p/w500${v.backdrop_path}>`;
})