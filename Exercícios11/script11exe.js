/* 1. Crie uma função contagemRegressiva que receba um número e 
exiba no console a contagem até 0. Exemplo: se receber 5 → imprime 
5, 4, 3, 2, 1, 0.*/ 

function contagemRegressiva(numero) {
    for (let i = numero; i >= 0; i--) {
        console.log(i);
    }
}

contagemRegressiva(10);


/* 2. Crie uma função celsiusParaFahrenheit que receba uma 
temperatura em Celsius e retorne o valor em Fahrenheit usando a 
fórmula: 
F = C * 1.8 + 32.*/

function celsiusParaFahrenheit(celsius) {
    let fahrenheit = celsius * 1.8 + 32;
    return fahrenheit;
}   
console.log(celsiusParaFahrenheit(30));


/* 3. Crie uma função mostrarCores que receba um array de cores e exiba 
no console: 
"Cor disponível: [cor]" para cada item.*/
function mostrarCores(cores) {
    for (let i = 0; i < cores.length; i++) {
        console.log("Cor disponível: " + cores[i]);
    }   
}
mostrarCores(["vermelho", "azul", "verde"]);


/* 4. Crie uma função aprovadoOuNao que receba duas notas e a 
frequência do aluno (0 a 100). 
Regra: aprovado se (média >= 6) E (frequência >= 75). Retorne true 
ou false.*/

function aprovadoOuNao(nota1, nota2, frequencia) {
    let media = (nota1 + nota2) / 2;
    if (media >= 6 && frequencia >= 75) {
        return true;
    } else {
        return false;
    }
}

console.log(aprovadoOuNao(7, 8, 80));
console.log(aprovadoOuNao(5, 6, 70));
console.log(aprovadoOuNao(6, 6, 75)); 


/* 5. Crie uma função potencia que receba base e expoente e retorne o 
resultado da potência usando laço for 
Crie um objeto calculadora com métodos: 
 ● somar(a, b) 
 ● subtrair(a, b) 
 ● multiplicar(a, b) 
 ● dividir(a, b) 
Teste cada operação no console.*/

function potencia(base, expoente) {
    let resultado = 1;
    for (let i = 0; i < expoente; i++) {
        resultado *= base;
    }   
    return resultado;
}

console.log(potencia(2, 3));
console.log(potencia(5, 4));

let calculadora = {
    somar: function(a, b) {
        return a + b;
    },
    subtrair: function(a, b) {
        return a - b;   
    },
    multiplicar: function(a, b) {
        return a * b;
    },
    dividir: function(a, b) {
        if (b !== 0) {
            return a / b;
        } else {
            return "Erro: Divisão por zero";
        }   
    }
};

console.log(calculadora.somar(5, 3));
console.log(calculadora.subtrair(10, 4));
console.log(calculadora.multiplicar(6, 7));
console.log(calculadora.dividir(20, 5));
console.log(calculadora.dividir(10, 0));


/* 6. Crie uma função menorNumero que receba um array de 
números e retorne o menor valor.*/ 

function menorNumero(numeros) {
    let menor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }   
    return menor;
}   
console.log(menorNumero([5, 3, 8, 1, 4]));


/* 7. Crie uma função listarLivros que receba um array de 
objetos no formato: 
{ titulo: "Dom Casmurro", autor: "Machado de Assis" } 
e exiba no console: 
"[Título] - escrito por [Autor]".*/

function listarLivros(livros) {
    for (let i = 0; i < livros.length; i++) {
        console.log(livros[i].titulo + " - escrito por " + livros[i].autor);
    }   
}
listarLivros([
    { titulo: "Dom Casmurro", autor: "Machado de Assis" },
    { titulo: "O Alquimista", autor: "Paulo Coelho" },
    { titulo: "Bíblia Sagrada", autor: "Vários Autores" }
]);


/* 8. Crie uma função somarImpares que receba um array de 
números e retorne a soma apenas dos números ímpares.*/

function somarImpares(numeros) {
    let soma = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 !== 0) {
            soma += numeros[i];
        }
    }   
    return soma;
}
console.log(somarImpares([1, 2, 3, 4, 5]));


/* 9. Crie uma função gerarSenha que receba um número n e 
retorne uma string com n caracteres aleatórios 
escolhidos de um array de caracteres possíveis 
(["a","b","c","1","2","3","@","#","$"]).*/

function gerarSenha(n) {
    let caracteres = ["a","b","c","1","2","3","@","#","$"];
    let senha = ""; 
    for (let i = 0; i < n; i++) {
        let indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[indiceAleatorio];
    }
    return senha;
}
console.log(gerarSenha(8));

