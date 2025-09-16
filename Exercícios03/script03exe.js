/*1. Crie variáveis para armazenar as seguintes informações: 
 Seu nome 
 Sua idade 
 Sua altura (em metros, com casas decimais) 
 Se você é estudante (verdadeiro ou falso)*/ 

let nome = "Raphael";
let idade = 37;
let altura = 1.69;
let estudante = true;

//2. Mostre todas essas variáveis no console com console.log().

console.log("Nome:", nome);
console.log("Idade:", idade);
console.log("Altura:", altura);
console.log("Estudante:", estudante);

//3. Converta sua idade para string e sua altura para número inteiro. Mostre no console. 

console.log("Idade como string:", String(idade));
console.log("Altura como inteiro:", parseInt(altura));

/*4. Crie duas variáveis a e b com valores numéricos.
Calcule e mostre: 
. A soma (a + b) 
. A subtração (a - b) 
. A multiplicação (a * b) 
. A divisão (a / b) 
. O resto da divisão (a % b)*/

let a = 10;
let b = 3;
console.log("Soma:", a + b);
console.log("Subtração:", a - b);
console.log("Multiplicação:", a * b);
console.log("Divisão:", a / b);
console.log("Resto da divisão:", a % b);

//5. Peça para o usuário (use prompt()) digitar um número. 
//  Multiplique esse número por 10 e mostre o resultado.

let numeroUsuario = prompt("Digite um número:");
let resultadoMultiplicacao = numeroUsuario * 10;
console.log("Resultado da multiplicação por 10:", resultadoMultiplicacao);

/*6. Crie uma variável que receba o resultado da seguinte expressão e mostre o valor 
final: 
let resultado = (10 + 5) * 2 - 20 / 2*/ 

let resultado = (10 + 5) * 2 - 20 / 2;
console.log("Resultado da expressão:", resultado);

/* 7. Crie duas variáveis: idade1 = 18 e idade2 = 20. 
. Verifique e mostre no console: 
. idade1 > idade2 
. idade1 < idade2 
. idade1 >= 18 
. idade2 == "20" (atenção ao tipo de dado) 
. idade2 === "20"*/ 

let idade1 = 18;
let idade2 = 20;
console.log("idade1 > idade2:", idade1 > idade2);
console.log("idade1 < idade2:", idade1 < idade2);
console.log("idade1 >= 18:", idade1 >= 18);
console.log('idade2 == "20":', idade2 == "20");
console.log('idade2 === "20":', idade2 === "20");


/*8. Peça para o usuário digitar sua idade. 
. Se a idade for maior ou igual a 18, mostre: "Você é maior de idade". 
. Caso contrário, mostre: "Você é menor de idade". */

let idadeUsuario = prompt("Digite sua idade:"); 
if (idadeUsuario >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

/*9. Crie um programa que compara dois números digitados pelo usuário e diga qual é o 
maior, ou se são iguais.*/ 

let num1 = parseFloat(prompt("Digite o primeiro número:"));
let num2 = parseFloat(prompt("Digite o segundo número:"));
if (num1 > num2) {
    console.log("O maior número é:", num1);
} else if (num2 > num1) {   
    console.log("O maior número é:", num2);
} else {
    console.log("Os números são iguais.");
}
    
/*10. Média de três notas 
Peça três notas para o usuário, calcule a média e mostre se ele foi aprovado (média ≥ 7) ou 
reprovado.*/

let nota1 = parseFloat(prompt("Digite a primeira nota:"));
let nota2 = parseFloat(prompt("Digite a segunda nota:"));
let nota3 = parseFloat(prompt("Digite a terceira nota:"));
let media = (nota1 + nota2 + nota3) / 3;
console.log("Média:", media.toFixed(2));
if (media >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}   
   
// 11. Peça dois números e uma operação (+, -, *, /). Execute e mostre o resultado.

let numero1 = parseFloat(prompt("Digite o primeiro número:"));
let numero2 = parseFloat(prompt("Digite o segundo número:"));
let operacao = prompt("Digite a operação (+, -, *, /):");
let resultadoOperacao;
switch (operacao) {
    case "+":
        resultadoOperacao = numero1 + numero2;
        break;
    case "-":
        resultadoOperacao = numero1 - numero2;
        break;
    case "*":
        resultadoOperacao = numero1 * numero2;
        break;
    case "/":
        if (numero2 !== 0) {
            resultadoOperacao = numero1 / numero2;
        } else {
            resultadoOperacao = "Erro: Divisão por zero";
        }
        break;
    default:
        resultadoOperacao = "Operação inválida";
}
console.log("Resultado da operação:", resultadoOperacao);

// 12. Peça um número e diga se ele é par ou ímpar.

let numeroParImpar = parseInt(prompt("Digite um número:")); 
if (numeroParImpar % 2 === 0) {
    console.log("O número é par.");
} else {
    console.log("O número é ímpar.");
}

// 13. Peça três números e mostre qual é o maior e qual é o menor.

let n1 = parseFloat(prompt("Digite o primeiro número:"));
let n2 = parseFloat(prompt("Digite o segundo número:"));
let n3 = parseFloat(prompt("Digite o terceiro número:"));
let maior = n1;
let menor = n1;
if (n2 > maior) {
    maior = n2;
}
if (n3 > maior) {
    maior = n3;
}
if (n2 < menor) {
    menor = n2;
}
if (n3 < menor) {
    menor = n3;
}
console.log("Maior número:", maior);
console.log("Menor número:", menor);
    
// 14. Peça uma temperatura em Celsius e converta para Fahrenheit e Kelvin.

let celsius = parseFloat(prompt("Digite a temperatura em Celsius:"));
let fahrenheit = (celsius * 9/5) + 32;
let kelvin = celsius + 273.15;
console.log(`${celsius}°C é igual a ${fahrenheit.toFixed(2)}°F e ${kelvin.toFixed(2)}K.`);

/* 15. Peça o peso e altura do usuário e calcule o IMC. Depois classifique: 
. Menor que 18.5 → Abaixo do peso 
. Entre 18.5 e 24.9 → Peso normal 
. Entre 25 e 29.9 → Sobrepeso 
. 30 ou mais → Obesidade*/

let peso = parseFloat(prompt("Digite seu peso em kg:"));
let alturaUsuario = parseFloat(prompt("Digite sua altura em metros:"));
let imc = peso / (alturaUsuario * alturaUsuario);
console.log("Seu IMC é:", imc.toFixed(2));
if (imc < 18.5) {
    console.log("Classificação: Abaixo do peso");
}
else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Classificação: Peso normal");
}
else if (imc >= 25 && imc <= 29.9) {
    console.log("Classificação: Sobrepeso");
}
else {
    console.log("Classificação: Obesidade");
}   
// FIM DOS EXERCÍCIOS

// Resumo dos exercícios:   

// 1. Criação e exibição de variáveis.
// 2. Conversão de tipos de dados.
// 3. Operações matemáticas básicas.            
// 4. Entrada de dados do usuário e manipulação.
// 5. Uso de expressões matemáticas.
// 6. Avaliações booleanas e comparações.
// 7. Estruturas condicionais (if-else, switch).
// 8. Cálculo de médias e classificações.
// 9. Manipulação de strings e números.
// 10. Cálculo do IMC e classificação de saúde.
