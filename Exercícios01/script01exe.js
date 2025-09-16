//1. Crie uma variável chamada nome e atribua a ela o seu nome. 
//Exiba o valor no console.

let nome = "Raphael";
console.log(nome);

// 2. Crie duas variáveis chamadas idade e anoAtual. Mostre no console: Eu tenho
//X anos e estamos no ano Y.

let idade = 37;
let anoAtual = 2024;
console.log("Eu tenho " + idade + " anos e estamos no ano de " + anoAtual);
// ou console.log(`Eu tenho ${idade} anos e estamos no ano ${anoAtual}`);

//Crie duas variáveis chamadas numero1 e numero2.Atribua valores a elas e exiba no
//console a soma.

let num1 = 10;
let num2 = 5;
console.log(num1 + num2);

// 4. Crie uma variável produto com o nome de um item e uma variável preco com 
//o valor desse item. Mostre no console a frase: O produto X custa Y reais.

let produto = "Notebook";
let preco = 2500;
console.log(`O produto ${produto} custa ${preco} reais.`);

// 5. Crie uma variável corFavorita e atribua a sua cor preferida.Depois, mude 
//o valor da variável para outra cor e exiba os dois valores no console.

let corFavorita = "Azul";
console.log(corFavorita);

// 6. Crie duas variáveis chamadas a e b.Mostre no console o resultado de:
//Soma, Subtração, Multiplicação e Divisão.

let a = 15;
let b = 3;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// 7. Crie três variáveis: primeiroNome, sobrenome e idade. Monte a frase: Meu nome
//é X Y e eu tenho Z anos.

let primeiroNome = "Raphael";
let sobrenome = "Eloi";
let idade2 = 37;
console.log(`Meu nome é ${primeiroNome} ${sobrenome} e eu tenho ${idade2} anos.`);

// 8. Crie uma variável com a sua idade. Depois, crie uma variável anosParaFrente
//com o valor 10. Mostre no console: Daqui a 10 anos, eu terei X anos.

let minhaIdade = 37;
let anosParaFrente = 10;
console.log(`Daqui a ${anosParaFrente} anos, eu terei ${minhaIdade + anosParaFrente} anos.`);

// 9. Crie uma variável numeroTexto com o valor "25" (string).Converta para 
//número e some com mais 10.Exiba o resultado no console.

let numeroTexto = "25";
let numeroConvertido = parseInt(numeroTexto);
console.log(numeroConvertido + 10);

// 10. Peça para o usuário digitar seu nome e idade (usando prompt). Depois,
//mostre um alerta com a mensagem: Olá, [nome]! Você tem [idade] anos.

let userName = prompt("Digite seu nome:");
let userAge = prompt("Digite sua idade:");
alert(`Olá, ${userName}! Você tem ${userAge} anos.`);
let idade3 = 20;
let idadeMinima = 18;
let podeEntrar = idade3 >= idadeMinima;
console.log(podeEntrar);




