const idadeMinima = 18;
const idadeCliente = 16;

if (idadeCliente >= idadeMinima) {
    console.log("cerveja")
} else {
    console.log("suco")
}

// OPERADOR TERNÁRIO

            // condição                      true      false
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")

const nome = "Leo";
const idade = 23;
const bebidaMaior = "cerveja";
const bebidaMenor = "suco";

console.log(`${nome} diz: por favor, eu quero beber ${idade >= 18 ? bebidaMaior : bebidaMenor}.`)