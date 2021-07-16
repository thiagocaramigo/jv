/*
A função abaixo não tem argumentos(parametros) e não tem retorno, ou seja, ela não o comando
return(retorno) para devolver nada. Ela simplismente executa o código que é exibir 
em tela de console o texto "Olá".
As funções que não retornam são chamadas de void(vazio)
*/
function mensagem(){
    console.log("Olá");
}

//Vamos criar uma função com um parâmetro. Neste caso será o nome de alguém
function mensagem2(nome){
    console.log("Olá "+nome)
}

//Vamos criar uma função com 2 argumentos(parâmetro), que será nome e a ano de nascimento
function mensagemCalcula(nome, anonascimento){
    console.log("Olá "+nome+". Você tem "+(2021-anonascimento)+" anos de idade");
}

function calcDesc(){
    var pr = prompt("Digite o nome do produto:");
    var pc = prompt("Digite o preço do produto");
    var ds = prompt("Digite apenas o numero referente ao desconto");
    var rs = pc * calcPercentual(ds);
    console.log("O seu desconto é de: "+rs);
}

function calcPercentual( valor ){
    return valor / 100;
}

//Primeira função anonima em javascript
// var msg = function(){
//     console.log("Olá! Eu sou a primeira função anonima");
// };

//Segunda função anonima com parâmetros
// var calc2 = function(n1,n2){
//     console.log(n1+n2);
// };
//---Refactor das funções anonimas acima

const msg = function(){
    console.log("Olá! Eu sou aprimeira função anonima");
}

const calc2 = function(n1,n2){
    console.log(n1+n2);
};

//Vamos usar as funções de seta(arrow function) =>

const nome = () => {
    console.log("Helena de Oliveira");
}


const exibirCalculo = ()=>{
    n = [10,5,9,45,6,12];

    console.log("O resultado da soma dos números: "+n+" é :" + soma(n));
}
const soma = (valores) => {
    var rs = 0;
    for(i = 0 ; i < valores.length ; i++){
        rs += valores[i];
    }
   return rs; 
}

//Vamos trabalhar com clausura. Closures
//Refactor das funções calcDesc+calcPercentual e  soma+exibirCalculo
// Utilizando as funções tradicionais
function calcDesc2(){
    var pr = prompt("Digite o nome do produto:");
    var pc = prompt("Digite o preço do produto");
    var ds = prompt("Digite apenas o numero referente ao desconto");
    
    var rs = pc * calcPer(ds);
    
    console.log("O seu desconto é de: "+rs);

                    function calcPer(valor){
                        return valor / 100;
                    }
}



const exibirCalculo2 = () => {
    n = [10,5,9,45,6,12];
    const soma2 = (valor) => {
        var rs = 0;
        for(i = 0; i < valor.length ; i++){
            rs += valor[i];
        }
        return rs;
    };
    console.log("O resultado da soma dos números: "+n+" é :" + soma2(n));
}

