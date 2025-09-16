    /*Crie um programa em JavaScript que atenda aos seguintes requisitos:


1. Crie uma função que receba dois números e retorne a soma deles.*/
function somar(a, b) {
    return a + b;
}   


/*2.Crie uma função que receba um número e retorne true se for par, ou false
caso contrário.8*/
function ehPar(num) {
    return num % 2 === 0;
}   


//3. Crie uma função que receba três notas e retorne a média delas.
function media (nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3;
}

/*4. Crie um array chamado compras com pelo menos 5 itens. Use um for para
imprimir todos os itens.*/
let compras = ['arroz', 'feijão', 'macarrão', 'carne', 'verduras'];
for (let i = 0; i < compras.length; i++) {
    console.log(compras[i]);
    
}


//5. Crie um array de números e use um for para somar todos os elementos.
let numeros = [10, 20, 30, 40, 50];
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
console.log("A soma dos números é: " + soma);


//6. Crie um array de nomes e use um laço para mostrar todos em maiúsculas.
let nomes = ['ana', 'bruno', 'carla', 'daniel', 'eduardo'];
for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i].toUpperCase());
}

/*7. Usando a função criada para verificar se um número é par, mostre apenas os
números pares de 1 a 20.*/
for (let i = 1; i <= 20; i++) {
    if (ehPar(i)) {
        console.log(i + " é par");  
    }
}

/*8. Peça para o usuário digitar um número (com prompt) e mostre a tabuada
dele de 1 até 10.*/
let numero = prompt("Digite um número para ver a tabuada:");
console.log("Tabuada de " + numero + ":");  
for (let i = 1; i <= 10; i++) {
    console.log(numero + " x " + i + " = " + (numero * i));
}





