// PARÂMETROS DE FUNÇÃO

function soma(numero1, numero2) {
    return numero1 + numero2;
}

console.log(soma(2,2))
console.log(soma(245,20))
console.log(soma(-500,60))

// PARÂMETROS x ARGUMENTOS

// ORDEM DOS PARÂMETROS

function nomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade é ${idade}.`;
}

console.log(nomeIdade("Elielson", 28))
console.log(nomeIdade(28, "Elielson"))


function multiplica(numero1 = 1, numero2 = 1) {
    return numero1 * numero2;
}

//                           9          6
console.log(multiplica(soma(4,5), soma(3,3)))

console.log(multiplica(soma(4,5)))