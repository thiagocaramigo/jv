const b1 = document.getElementById("btn1");
const b2 = document.getElementById("btn2");
const b3 = document.getElementById("btn3");
const b4 = document.getElementById("btn4");
// b1.onclick=function(){
//     alert("Olá! Você clicou no botão 1");
// }
//refactor do código acima
// b1.onclick = () => {
//     alert("Olá! Você clicou no botão 1");
// }
/*
em uma programa em mais alto nível é mais indica que você utilize os comandos de 
escuta de eventos. Portanto vamos refatorar o código mais uma vez e utilizar o 
comando addEventListener, ou seja, vamos adicionar um evento de escuta para o 
botão e todos os outros elementos de nossa página
*/
//refactor do código acima
// b1.addEventListener("click",msgEvent1);

// function msgEvent1(){
//     alert("Olá! Você clicou no botão 1");
// }
//refactor do código acima
// b1.addEventListener("click", function(){
//     alert("Olá! Você clicou no botão 1")
// })
//refactor do código acima
//b1.addEventListener("click",()=>{alert("Olá! você clicou no botão 1")});
b1.addEventListener("click",msgNome);
function msgNome(){
    var x = prompt("Digite o nome");
    alert("Olá "+x)
}

//outra forma de capturar os elementos DOM do html é utilizando o querySelector
// com ele você precisará colocar o elemento de definicção que o identifica
//Ex.: quando for id, deve ser capturado assim: #idDoElemento
//Ex.: quando for class, deve ser assim:   .nomeDaClasse
const caixa = document.querySelector("#dv1");

const caixa1 = document.querySelector("button");

caixa.innerHTML = "Olá! Eu sou uma div";
caixa1.innerHTML = "Olá! Eu sou uma div";

b2.addEventListener("click", ()=>{
    caixa.innerHTML = "Mudei o texto"
    caixa1.innerHTML = "Mudei aqui também"
})


