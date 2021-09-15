// CONVERSÃO IMPLÍCITA
const numero = 456;
const numeroString = "456";

console.log(numero == numeroString)
console.log(numero + numeroString)

// CONVERSÃO EXPLÍCITA
console.log(numero + Number(numeroString))

const numero2 = 456;
const numeroStringConvertido = Number("456");

console.log(numero2 + numeroStringConvertido)