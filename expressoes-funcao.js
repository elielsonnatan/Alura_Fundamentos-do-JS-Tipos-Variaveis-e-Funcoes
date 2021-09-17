// DECLARAÇÃO DE FUNÇÃO (função normal)

function minhaFuncao(param) {
    // bloco de código
}

// EXPRESSÃO DE FUNÇÃO (função anônima)

// const soma = function(numero1, numero2) {return numero1 + numero2}
// console.log(soma(1 ,1))

// Diferença principal entre as duas: HOISTING
// funções e var são "listadas" no topo

console.log(apresentar())

function apresentar() {
    return "Olá!";
}

console.log(soma(1,1))

const soma = function(numero1, numero2) {return numero1 + numero2}