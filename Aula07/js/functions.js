// criando funções que não tem argumentos e não tem retorno
function bemVindo() {
    console.log("Olá. Seja bem-vindo!");
}

function dataSistema() {
    console.log(new Date().toLocaleDateString());
}

// função com argumentos e sem retorno
function tamanhoTexto(nome) {
    console.log(`O seu nome tem ${nome.length} letras`);
}

function calcDesconto(preco, percentual) {
    var rs = preco * percentual / 100;
    console.log(`O valor do desconto é ${rs}`);
}

//criar funcoes com argumentos e retorno
function soma(arrayNumeros) {
    var rs = 0;
    for (var i = 0; i < arrayNumeros.length; i++) {
        rs += arrayNumeros[i];
    }
    return rs;
}

function potencia(base, exp) {

    var ini = base;
    for (var i = 1; i < exp; i++) {
        ini *= base;
    }
    return ini;
}

function media(n1, n2, n3, n4) {
    return (n1 + n2 + n3 + n4) / 4;
}

// ----------------------------------------- Funções anônimas -------------------------------------------------------

// var somaDois = function (arrayNumbers) {
//     var rs = 0, i = 0;
//     while (i < arrayNumbers.length) {
//         rs += arrayNumbers[i];
//         i++;
//     }
//     return rs;
// }
//refatorar a função anonima acima
const somaDois = function (arrayNumbers) {
    var rs = 0, i = 0;
    while (i < arrayNumbers.length) {
        rs += arrayNumbers[i];
        i++;
    }
    return rs;
}
//Função anonima usando arrow function(função de seta)
// const mensagem = function () {
//     console.log("Oi")
// };
//refatorando o codigo acima
const mensagem = () => {
    console.log("Oi")
}
// window.document.onclick = () => {
//     console.log("Você clicou no body")
// }


const fundoR = () => {
    window.document.body.style.backgroundColor = "red";
}

const fundoW = () => {
    window.document.body.style.backgroundColor = "white";
}


function calcAcrescimo(price, percent) {

    return `O acresciom é : ${price * calcPercent(percent)} 
    e o valor final é ${price + price * calcPercent(percent)}`;

    function calcPercent(percent) {
        return percent / 100;
    }

}
/* ---- funções de callback
A função de callback é um retorno de chamada e passada por parametro dentro de outra função
*/


function exibir(algo) {
    console.log(algo);
}

function calculo(n1, n2, functionCallBack) {
    var rs = n1 + n2;
    functionCallBack(rs)
}


calculo(12, 10, exibir)































