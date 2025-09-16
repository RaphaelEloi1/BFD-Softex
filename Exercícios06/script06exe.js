/*1. Escreva um programa que mostre os números de 10 até 1 em ordem decrescente 
usando for.*/

for (let i = 10; i >= 1; i--) {
    console.log(i);
}

/*2. Crie um programa que calcule e mostre o quadrado dos números de 1 até 10 
usando for.*/

for (let i = 1; i <= 10; i++) {
    console.log(`O quadrado de ${i} é: ${i * i}`);
}

/*3. Faça um programa que mostre os números de 5 em 5, começando em 0 e indo até 
50, usando while. */

let num = 0;
while (num <= 50) {
    console.log(num);
    num += 5;
}

/*4. Escreva um programa que conte quantos números existem de 100 até 200 e mostre 
o resultado usando while. */

let contagem = 0;
let numero = 100;

while (numero <= 200) {
    contagem++;
    numero++;
}
console.log(`Existem ${contagem} números.`);

/*5. Crie um programa que peça para imprimir a frase "Estudando JavaScript" 
exatamente 7 vezes usando do...while. */

let contador = 0;
do {
    console.log("Estudando JavaScript");
    contador++;
} while (contador < 7);

/*6. Crie uma função chamada saudacao que apenas mostre no console a mensagem: 
"Olá, seja bem-vindo ao JavaScript!" 
E depois, chame a função. */

function saudacao() {
    console.log("Olá, seja bem-vindo ao JavaScript!");
}
saudacao(); 


/*7. Crie uma função chamada bomDia que receba um nome como parâmetro e mostre 
no console: 
"Bom dia, [nome]!" 
Chame a função passando o seu nome.*/

function bomDia(nome) {
    console.log(`Bom dia, ${nome}!`);
}
bomDia("Raphael");

/*8. Crie uma função chamada dobro que receba um número como parâmetro e retorne 
o dobro desse número.*/

function dobro(numero) {
    return numero * 2;
}       
console.log(dobro(5)); 

/*9. Crie uma função chamada soma que receba dois números como parâmetros e 
retorne a soma deles. 
Depois, mostre o resultado no console. */


function soma(num1, num2) {
    return num1 + num2;
}   
console.log(soma(8, 9));

/*10. Crie uma função chamada ehPar que receba um número e retorne: 
● true, se for par 
● false, se for ímpar 
Teste a função chamando-a com diferentes números.*/

function ehPar(numero) {
    return numero % 2 === 0;
}
console.log(ehPar(4));
console.log(ehPar(7));







