//-------------------------Lista de exercícios----------------------------------

/*1. Crie variáveis para armazenar nome, idade, email e estudando (boolean). 
  2. Mostre uma frase no console usando template string, como: 
"Meu nome é João, tenho 20 anos, meu e-mail é joao@email.com e 
estou estudando: true".*/ 

let nome = "Raphael";
let idade = 37;
let email = "raphaeleloi2@gmail.com";
let estudando = true;

console.log(`Meu nome é ${nome}, tenho ${idade} anos, meu e-mail é ${email} e 
estou estudando: ${estudando}.`);

/*1. Peça duas variáveis: precoUnitario e quantidade. 
  2. Calcule o total da compra. 
  3. Se o valor ultrapassar 100, aplique um desconto de 10%. 
  4. Verifique se a quantidade comprada é par e se está entre 5 e 20 (inclusive).*/
   
   let precoUnitario = 25;
   let quantidade = 8;
   let totalCompra = precoUnitario * quantidade;
   let desconto = 0;

    if (totalCompra > 100) {
        desconto = totalCompra * 0.10;
        totalCompra = totalCompra - desconto;
        console.log(`Você recebeu um desconto de R$${desconto.toFixed(2)}.`);
    }
    console.log(`O total da compra é R$${totalCompra.toFixed(2)}.`);
    if (quantidade % 2 === 0) {
        console.log("A quantidade comprada é par.");
    } else {
        console.log("A quantidade comprada é ímpar.");
    }
    if (quantidade >= 5 && quantidade <= 20) {
        console.log("A quantidade está entre 5 e 20.");
    } else {
        console.log("A quantidade não está entre 5 e 20.");
    }  
    
/*1. Crie uma variável nota (0 a 100). 
  2. Use if/else para atribuir conceito: 
    ○ A: 90–100 
    ○ B: 80–89 
    ○ C: 70–79 
    ○ D: 60–69 
    ○ F: abaixo de 60 
  3. Mostre no console: "O aluno tirou {nota} e ficou com conceito {conceito}".*/ 

    let nota = 85;
    let conceito;

    if (nota >= 90 && nota <= 100) {
        conceito = "A";
    } else if (nota >= 80 && nota < 90) {
        conceito = "B";
    } else if (nota >= 70 && nota < 80) {
        conceito = "C";
    } else if (nota >= 60 && nota < 70) {
        conceito = "D";
    } else if (nota < 60) {
        conceito = "F";
    } else {
        conceito = "Nota inválida";
    }
    console.log(`O aluno tirou ${nota} e ficou com conceito ${conceito}.`);


/*1. Receba um número inteiro. 
  2. Use um laço for para imprimir sua tabuada (1 a 10). 
  3. Depois, refaça a tabuada usando while.*/

    let numero = 7;
    console.log(`Tabuada do ${numero} usando for:`);
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }

    
    console.log(`Tabuada do 5 usando while:`);
    let num = 1;
    while(num <= 10) {
        console.log(`5 x ${num} = ${5 * num}`);
        num++;
    }

/*1. Crie um array compras com pelo menos 5 itens (strings). 
  2. Imprima todos os itens numerados (1. Arroz, 2. Feijão...). 
  3. Crie uma função imprimirRelatorio(lista) que não retorna nada (só imprime 
no console). 
  4. Teste passando o array compras para a função.*/
  
    let compras = ["Arroz", "Feijão", "Macarrão", "Carne", "Verduras"];
    function imprimirRelatorio(lista) {
        for (let i = 0; i < lista.length; i++) {
            console.log(`${i + 1}. ${lista[i]}`);
        }
    }
    imprimirRelatorio(compras);

/*1. Crie uma função calcularMedia(a, b, c = 0) que retorne a média de dois ou 
três números. 
  2. Teste a função com dois valores e depois com três.  
  3. Crie outra função resultadoFinal(nota) que: 
    ○ retorna "Aprovado" se nota ≥ 60 
    ○ retorna "Recuperação" se 40 ≤ nota < 60 
    ○ retorna "Reprovado" se nota < 40*/ 

function calcularMedia (a, b, c = 0){
    let media = (a + b + c) / (c === 0 ? 2 : 3)
    return media
}

let media1 = calcularMedia(30, 80)
console.log(`Média com dois valores: ${media1}`);
let media2 = calcularMedia(70, 80, 90)
console.log(`Média com três valores: ${media2}`);
function resultadoFinal(nota){
    if(nota >= 60){
        return "Aprovado"
    } else if(nota >= 40 && nota < 60){
        return "Recuperação"
    } else {
        return "Reprovado"
    }   
}
console.log(`Resultado final: ${resultadoFinal(media1)}`);
console.log(`Resultado final: ${resultadoFinal(media2)}`);

/*1. Crie um objeto aluno com propriedades: nome, idade, curso e um método 
apresentar() que retorne uma string. 
2. No console, execute aluno.apresentar(). 
3. Adicione dinamicamente uma nova propriedade nota e mostre no console.*/

let aluno ={
    nome: "Raphael Eloi",
    idade: 37,
    curso: "JavaScript",
    apresentar: function(){
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e curso ${this.curso}.`
    }
}
console.log(aluno.apresentar());
aluno.nota = 8
console.log(`A nota do aluno é ${aluno.nota}.`);

/*1. Crie um array carrinho com pelo menos 3 objetos representando produtos, cada 
um com: 
    ○ nome, preco, quantidade 
2. Escreva uma função totalCarrinho(itens) que calcule e retorne o valor total. 
3. Escreva outra função filtrarCaros(itens) que retorne apenas os produtos com 
preço acima de 50. 
4. No final, mostre no console: 
    ○ Lista completa 
    ○ Total do carrinho 
    ○ Produtos filtrados */

let carrinho = [
    {nome: "Notbook", preco: 60, quantidade: 2},
    {nome: "TV", preco: 35, quantidade: 1},
    {nome: "Tablet", preco: 51, quantidade: 8}
]
function totalCarrinho(itens){
    let total = 0
    for(let i = 0; i < itens.length; i++){
        total += itens[i].preco * itens[i].quantidade
    }
    return total
}
function filtrarCaros(itens){
    return itens.filter(item => item.preco > 50)
}
console.log("Lista completa:", carrinho);
console.log(`Total do carrinho: R$${totalCarrinho(carrinho).toFixed(2)}`);
console.log("Produtos filtrados:", filtrarCaros(carrinho));



/*-------------------------------------------Sistema de Cadastro de Alunos------------------------------------------------------- 
Você deverá criar um programa em JavaScript que simule um sistema simples de 
cadastro de alunos. 
Esse sistema deve permitir: 
1. Cadastrar alunos (nome, idade, curso e nota). 
2. Listar alunos já cadastrados. 
3. Calcular a média das notas de todos os alunos. 
4. Mostrar situação final (Aprovado, Recuperação, Reprovado). 
Regras do desafio 
1. Variáveis e tipos: use let e const para armazenar informações como lista de 
alunos e dados individuais. 
2. Operadores: utilize operadores aritméticos para calcular médias e lógicos para 
validar condições. 
3. Condições: 
    ○ Nota ≥ 60 → "Aprovado" 
    ○ 40 ≤ nota < 60 → "Recuperação" 
    ○ Nota < 40 → "Reprovado" 
4. Laço de repetição: use for ou for...of para percorrer a lista de alunos. 
5. Funções: 
    ○ Uma função cadastrarAluno(nome, idade, curso, nota) que 
retorne um objeto aluno. 
    ○ Uma função listarAlunos(lista) que não retorne nada (só imprime). 
    ○ Uma função calcularMedia(lista) que retorne a média das notas. 
6. Objetos: cada aluno deve ser representado como um objeto com propriedades: 
    ○ nome, idade, curso, nota, apresentar() (método que retorna uma 
string com apresentação). */


// Lista que irá armazenar os alunos
let alunos = []

// Função para cadastrar um aluno
function cadastrarAluno(nome, idade, curso, nota) {
    let aluno = {
        nome: nome,
        idade: idade,
        curso: curso,
        nota: nota
    }
    alunos.push(aluno)
    console.log(`Aluno ${nome} cadastrado com sucesso!`)
}

// Função para listar todos os alunos
function listarAlunos() {
    console.log("=== Lista de Alunos ===")
    if (alunos.length === 0) {
        console.log("Nenhum aluno cadastrado.")
    } else {
        alunos.forEach((aluno, index) => {
            console.log(`${index + 1}. Nome: ${aluno.nome}, Idade: ${aluno.idade}, Curso: ${aluno.curso}, Nota: ${aluno.nota}, Situação: ${situacaoFinal(aluno.nota)}`)
        })
    }
}

// Função para calcular a média das notas
function calcularMediaNotas() {
    if (alunos.length === 0) {
        console.log("Não há alunos para calcular média.")
        return
    }
    let soma = 0
    for (let aluno of alunos) {
        soma += aluno.nota
    }
    let media = soma / alunos.length
    console.log(`Média das notas: ${media.toFixed(2)}`)
}

// Função para verificar a situação final do aluno com base na nota
function situacaoFinal(nota) {
    if (nota >= 60) {
        return "Aprovado"
    } else if (nota >= 40) {
        return "Recuperação"
    } else {
        return "Reprovado"
    }
}

// ---------- Teste do sistema ----------

cadastrarAluno("Davi", 8, "Matemática", 75)
cadastrarAluno("Danilo", 13, "História", 58)
cadastrarAluno("Raphael", 37, "Física", 35)

listarAlunos()
calcularMediaNotas() 


/*Tem um Extra: 
   ● Permitir cadastrar vários alunos e armazenar em um array de objetos. 
   ● Criar uma função filtrarAprovados(lista) que retorne apenas os alunos com 
situação "Aprovado".*/

function filtrarAprovados() {
    let aprovados = alunos.filter(aluno => aluno.nota >= 60)
    console.log("=== Alunos Aprovados ===")
    if (aprovados.length === 0) {
        console.log("Nenhum aluno aprovado.")
    } else {
        aprovados.forEach((aluno, index) => {
            console.log(`${index + 1}. Nome: ${aluno.nome}, Idade: ${aluno.idade}, Curso: ${aluno.curso}, Nota: ${aluno.nota}`)
        })
    }
}   
filtrarAprovados()



