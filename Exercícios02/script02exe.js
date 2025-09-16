// 1. Crie uma variável nome e atribua seu nome. Mostre no console.

let nome = "Raphael";
console.log(nome);

// 2. Crie uma variável idade e atribua sua idade. Mostre no console.

let idade = 37;
console.log(idade);

// 3. Crie duas variáveis cidade e estado e depois exiba no console a frase: 
//"Moro em [cidade] - [estado]".

let cidade = "Recife";
let estado = "PE";
console.log("Moro em " + cidade + " - " + estado);
// ou console.log(`Moro em ${cidade} - ${estado}`);

// 4. Crie duas variáveis numero1 = 10 e numero2 = 5. 
//Some, subtraia, multiplique e divida, mostrando cada resultado no console. 

let numero1 = 10;
let numero2 = 5;
console.log(numero1 + numero2); // Soma
console.log(numero1 - numero2); // Subtração
console.log(numero1 * numero2); // Multiplicação
console.log(numero1 / numero2); // Divisão

// 5. Crie uma variável preco = "49.90" (texto). 
// Converta para número e adicione 10. Mostre o resultado.

let preco = "49.90";
let precoNumero = parseFloat(preco);
let precoFinal = precoNumero + 10;
console.log(precoFinal);

// 6. Crie uma variável total = 0.1 + 0.2. 
// Mostre o resultado e depois arredonde para 2 casas decimais. 

let total = 0.1 + 0.2;
console.log(total); // Mostra o resultado
console.log(total.toFixed(2)); // Arredonda para 2 casas decimais

// 7. Crie uma variável mensagem = "Olá, mundo!". 
// Mostre a mensagem em letras maiúsculas e depois em minúsculas. 

let mensagem = "Olá, mundo!";
console.log(mensagem.toUpperCase()); // Maiúsculas
console.log(mensagem.toLowerCase()); // Minúsculas

// 8. Crie uma variável palavra = "JavaScript". 
// Mostre a primeira letra, a última letra e o tamanho da palavra. 

let palavra = "JavaScript";
console.log(palavra.charAt(0)); // Primeira letra
console.log(palavra.charAt(palavra.length - 1)); // Última letra
console.log(palavra.length); // Tamanho da palavra

/* 9. Crie uma variável idade = 20 e idadeMinima = 18. 
    . Crie uma variável podeEntrar que seja verdadeira se a idade for
      maior ou igual à idade mínima. 
    . Mostre no console.*/ 

let idade2 = 20;
let idadeMinima = 18;
let podeEntrar = idade2 >= idadeMinima;
console.log(podeEntrar);            

// 10. Crie uma variável resposta = "". 
//   . Transforme em booleano usando Boolean(resposta) e mostre. 
//   . Faça o mesmo com "Olá".

let resposta = "";
console.log(Boolean(resposta));
console.log(Boolean("Olá"));