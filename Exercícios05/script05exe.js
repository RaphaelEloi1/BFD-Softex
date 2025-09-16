/*1. Positivo ou Negativo. Peça um número ao usuário e diga se ele é positivo, 
negativo ou zero.*/

let numero = parseFloat(prompt("Digite um número:"));
if (numero > 0) {
    console.log("O número é positivo.");
} else if (numero < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}


// 2. Par ou Ímpar. Peça um número e diga se ele é par ou ímpar.

let numero2 = parseInt(prompt("Digite um número:"));
if (numero2 % 2 === 0) {
    console.log("O número é par.");
}else {
    console.log("O número é ímpar.");
}

/*3. Maior de Idade Peça a idade do usuário e diga se ele é maior de idade (18 
anos ou mais) ou menor de idade.*/

let idade = parseInt(prompt("Digite sua idade:"));
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

/*4. Faixa Etária Peça a idade e classifique: 
. Menor que 12 → Criança 
. 12 até 17 → Adolescente 
. 18 até 59 → Adulto 
. 60 ou mais → Idoso*/

let idade2 = parseInt(prompt("Digite sua idade:"));
if (idade2 < 12) {
    console.log("Criança"); 
} else if (idade2 >= 12 && idade2 <= 17) {
    console.log("Adolescente");
} else if (idade2 >= 18 && idade2 <= 59) {
    console.log("Adulto");
} else {
    console.log("Idoso");
}

/*5. Nota Escolar. Peça uma nota (0 a 10) e mostre: 
. Menor que 5 → Reprovado 
. De 5 a 6.9 → Recuperação 
. 7 ou mais → Aprovado */

let nota = parseFloat(prompt("Digite sua nota (0 a 10):"));
if (nota < 5) {
    console.log("Reprovado");
} else if (nota >= 5 && nota <= 6.9) {
    console.log("Recuperação");
} else if (nota >= 7 && nota <= 10) {
    console.log("Aprovado");
} else {
    console.log("Nota inválida");
}

/*6. Peça o valor de uma compra: 
. Até 100 → sem desconto 
. De 101 até 500 → 10% de desconto 
. Acima de 500 → 20% de desconto */

let valorCompra = parseFloat(prompt("Digite o valor da compra:"));
if (valorCompra <= 100) {
    console.log("Sem desconto. Total a pagar: R$" + valorCompra.toFixed(2));
} else if (valorCompra >= 101 && valorCompra <= 500) {
    let desconto10 = valorCompra * 0.10;
    let total10 = valorCompra - desconto10;
    console.log("10% de desconto. Total a pagar: R$" + total10.toFixed(2));
} else if (valorCompra > 500) {
    let desconto20 = valorCompra * 0.20;
    let total20 = valorCompra - desconto20;
    console.log("20% de desconto. Total a pagar: R$" + total20.toFixed(2));
}  else {
    console.log("Valor inválido");
}

/*7. Comparação de Números Peça dois números e mostre qual é o maior, ou se 
são iguais.*/

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
if (num1 > num2) {
    console.log("O maior número é: " + num1);
}
else if (num2 > num1) {
    console.log("O maior número é: " + num2);
} else {
    console.log("Os números são iguais.");
}

/*8. Categoria de Produto 
Peça ao usuário para digitar a categoria de um produto (alimento, bebida, 
eletrônico). 
. Se for alimento → escreva "Você escolheu comida". 
. Se for bebida → escreva "Você escolheu uma bebida". 
. Se for eletrônico → escreva "Você escolheu tecnologia". 
. Caso contrário → "Categoria inválida".*/

let categoria = prompt("Digite a categoria do produto (alimento, bebida, eletrônico):").toLowerCase(); 
if (categoria === "alimento") {
    console.log("Você escolheu comida.");
} else if (categoria === "bebida") {
    console.log("Você escolheu uma bebida.");
} else if (categoria === "eletrônico") {
    console.log("Você escolheu tecnologia.");
} else {
    console.log("Categoria inválida.");
}


/*9. Cálculo de IMC (Índice de Massa Corporal) Peça peso e altura. Calcule o IMC
 (peso / altura²) e classifique: 
. Menor que 18.5 → Abaixo do peso 
. Entre 18.5 e 24.9 → Peso normal 
. Entre 25 e 29.9 → Sobrepeso 
. 30 ou mais → Obesidade*/

let peso = parseFloat(prompt("Digite seu peso em kg:"));
let altura = parseFloat(prompt("Digite sua altura em metros:"));
let imc = peso / (altura * altura);
if (imc < 18.5) {
    console.log("Abaixo do peso. IMC: " + imc.toFixed(2));
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Peso normal. IMC: " + imc.toFixed(2));
} else if (imc >= 25 && imc <= 29.9) {
    console.log("Sobrepeso. IMC: " + imc.toFixed(2));
} else {
    console.log("Obesidade. IMC: " + imc.toFixed(2));
}   

/*10. Login Simples 
Peça um usuário e uma senha. 
. Se usuário = "admin" e senha = "1234" → escreva "Acesso permitido". 
. Caso contrário → "Acesso negado".*/

let usuario = prompt("Digite o usuário:");
let senha = prompt("Digite a senha:");
if (usuario === "admin" && senha === "1234") {
    console.log("Acesso permitido.");
} else {
    console.log("Acesso negado.");
}   

