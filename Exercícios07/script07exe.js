/* 1. Crie um programa que peça um número ao usuário e mostre a tabuada desse 
número de 1 a 10 usando um for.*/

let numero = parseInt(prompt("Digite um número para ver a tabuada:"));
console.log(`Tabuada do ${numero}:`);
for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}

/*2. Crie um programa que simule uma contagem regressiva de 10 até 1 usando 
while.Quando chegar a 0, deve mostrar "Feliz Ano Novo!". */

let contador = 10;
while (contador >= 1) {
    console.log(contador);
    contador--;
}
console.log("Feliz Ano Novo!");

/*3. Crie um programa que peça ao usuário uma senha e só termine quando a 
senha correta (1234) for digitada. Use do...while. */

let senha;
do {
    senha = prompt("Digite a senha (dica: é 1234):");
} while (senha !== "1234");
console.log("Senha correta! Acesso permitido.");

//1. Declare uma variável global chamada saudacao com o valor "Olá".

let saudacao = "Olá";
console.log(saudacao);


/*2. Crie uma função chamada boasVindas que receba como parâmetro nome e retorne uma mensagem 
de boas-vindas usando a variável global saudação.
Exemplo de retorno: "Olá Maria!".*/

function boasVindas(nome){
    return `${saudacao} ${nome}!`;
}
console.log(boasVindas("Maria"));

/*3. Adicione um parâmetro opcional chamado titulo.
Se titulo for fornecido, a mensagem deve incluir: "Olá, Dra. Maria!".
Se não for fornecido, use apenas o nome: "Olá, Maria!".*/

function boasVindas(nome, titulo){
    if(titulo){
        return `${saudacao}, ${titulo} ${nome}!`;
    }
    return `${saudacao}, ${nome}!`;
}   
console.log(boasVindas("Maria", "Dra"));
console.log(boasVindas("Maria"));


/*4. Crie uma função chamada mostrarMensagem que receba uma mensagem e apenas imprima no console
(sem return).*/

function mostrarMensagem(mensagem){
    console.log(mensagem);
}
mostrarMensagem("Olá, tudo bem?");

/*5. Dentro da função boasVindas, declare uma variável local chamada mensagem que armazene a
string de saudação antes de retorná-la.*/

function boasVindas(nome){    
    let mensagem = `Olá, ${nome}!`;
    return mensagem;
}
console.log(boasVindas("Maria"));

/*6. Um desenvolvedor está criando um programa em JavaScript para exibir uma lista de 
compras no console. Ele deseja que cada item apareça em uma linha, começando 
com um traço (-).*/

let listaDeCompras = ["Maçãs", "Bananas", "Cenouras", "Leite", "Pão"];

function exibirListaDeCompras(itens) {
    console.log("Lista de Compras:");
    for (let i = 0; i < itens.length; i++) {
        console.log(`- ${itens[i]}`);
    }   
}
exibirListaDeCompras(listaDeCompras);

/*7. Sabendo que os itens da lista estão armazenados em um array, qual estrutura de 
repetição pode ser usada para percorrer o array do primeiro até o último 
elemento e exibir cada item corretamente?*/

for (let i = 0; i < listaDeCompras.length; i++) {
    console.log(`- ${listaDeCompras[i]}`);
}