// Número sem formatação
function GanhoPorHora1(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes);

    return salarioHora;
}

const salarioHora = GanhoPorHora1(1355, 22);

console.log("Numero sem formatação: " + salarioHora); 

// Número formatado usando Math.round()
function GanhoPorHora2(salario, horasTrabalhadasNoMes) {

    const salarioHora1 = (salario / horasTrabalhadasNoMes);

    return Math.round(salarioHora1);
}

const salarioHora1 = GanhoPorHora2(1355, 22);

console.log("\nNúmero formatado usando Math.round(): " + salarioHora1);

// Número formatado usando toFixed()
function GanhoPorHora3(salario, horasTrabalhadasNoMes) {

    const salarioHora2 = (salario / horasTrabalhadasNoMes);

    return salarioHora2.toFixed(2);
}

const salarioHora2 = GanhoPorHora3(1355, 22);

console.log("\nNúmero formatado usando Math.round(): " + salarioHora2);

// Número formatado usando toLocaleString()
function GanhoPorHora4(salario, horasTrabalhadasNoMes) {

    const salarioHora3 = (salario / horasTrabalhadasNoMes);

    return salarioHora3.toLocaleString('pt-BR', {style: 'currency', currency:'BRL'});
}

const salarioHora3 = GanhoPorHora4(1355, 22);

console.log("\nNúmero formatado usando Math.round(): " + salarioHora3);