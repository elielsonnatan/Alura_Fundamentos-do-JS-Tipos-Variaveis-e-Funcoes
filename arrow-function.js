// FUNÇÃO NORMAL
function apresentar(nome) {
    return `meu nome é ${nome}`;
}

// FUNÇÃO ANÔNIMA
const nome = function(nome) {return `meu nome é ${nome}`}

// ARROW FUNCTION
const apresentarArrow = nome => `meu nome é ${nome}`;
const soma = (numero1, numero2) => numero1 + numero2;

// Arrow function com mais de uma linha de instrução

const somaNumerosPequenos = (numero1, numero2) => {
    if (num1 || num2 > 10) {
        return "Somente números de 1 a 9"
    } else {
        return numero1 + numero2
    }
}

// Hoisting: Arrow function se comporta como função anônima