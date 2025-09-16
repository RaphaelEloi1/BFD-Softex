//1. Crie um objeto aluno com as propriedades: Nome, Idade e Curso. 
//E exiba todas as informações no console.

let aluno = {
    nome: "Raphael",
    idade: 37,
    curso: "JavaScript no BFD"
};
console.log(`Nome: ${aluno.nome}`);
console.log(`Idade: ${aluno["idade"]}`);
console.log(`Curso: ${aluno.curso}`);

//Adicione ao objeto aluno um método chamado apresentar que exiba no console: 
//"Olá, meu nome é ___ e eu estudo ___."

aluno.apresentar = function() {
    console.log(`Olá, meu nome é ${this.nome} e eu estudo ${this.curso}.`);
}  
aluno.apresentar();

/*Crie um objeto livro com as propriedades: Título, autor, Ano e Disponível(True
ou false). 
E um método emprestar que altere disponível para false.*/

let livro = {
    titulo: "Bíblia Sagrada",
    autor: "Vários Autores", 
    ano: "2024",
    disponivel: false,
    emprestar: function() {
        if (this.disponivel) {
            this.disponivel = true;
            console.log(`Você emprestou o livro "${this.titulo}".`);
        } else {
            console.log(`Desculpe, o livro "${this.titulo}" não está disponível no momento.`);
        }
    }
};

console.log(`Título: ${livro.titulo}`);
console.log(`Autor: ${livro.autor}`);
console.log(`Ano: ${livro.ano}`);
console.log(`Disponível: ${livro.disponivel}`);
livro.emprestar();

/*Crie um objeto produto com as propriedades: Nome, Preco e Estoque.
E dois métodos: 
.vender(qtd) → diminui a quantidade do estoque. 
.repor(qtd) → aumenta a quantidade do estoque.*/

let produto = {
    nome: "Notebook",
    preco: 3500,
    estoque: 10,
    vender: function(qtd) {
        if (qtd <= this.estoque) {
            this.estoque -= qtd;
            console.log(`Você vendeu ${qtd} unidade(s) do produto ${this.nome}.`);
        } else {
            console.log(`Desculpe, não há estoque suficiente do produto ${this.nome}.`);
        }
    },
    repor: function(qtd) {
        this.estoque += qtd;
        console.log(`Você repôs ${qtd} unidade(s) do produto ${this.nome}.`);
    }
};

console.log(`Nome: ${produto.nome}`);
console.log(`Preço: R$${produto.preco}`);
console.log(`Estoque: ${produto.estoque}`);
produto.vender(3);
console.log(`Estoque após venda: ${produto.estoque}`);
produto.repor(5);
console.log(`Estoque após reposição: ${produto.estoque}`);

/*Crie um objeto contaBancaria com: Titular e saldo.
E métodos: 
.depositar(valor) → aumenta o saldo. 
.sacar(valor) → diminui o saldo (se houver saldo suficiente).*/

let contaBancaria = {
    titular: "Raphael",
    saldo: 1000,
    depositar: function(valor) {
        this.saldo += valor;
        console.log(`Você depositou R$${valor}. Novo saldo: R$${this.saldo}.`);
    },
    sacar: function(valor) {
        if (valor <= this.saldo) {
            this.saldo -= valor;
            console.log(`Você sacou R$${valor}. Novo saldo: R$${this.saldo}.`);
        } else {
            console.log(`Saldo insuficiente para sacar R$${valor}. Saldo atual: R$${this.saldo}.`);
        }
    }
};  
console.log(`Titular: ${contaBancaria.titular}`);
console.log(`Saldo: R$${contaBancaria.saldo}`);
contaBancaria.depositar(500);
contaBancaria.sacar(300);

/*Crie um objeto filme com as propriedades: Titulo, Genero, Ano de Lançamento e 
Avaliações (array vazio).
E um método avaliar(nota) que adiciona a nota dentro do array avaliacoes.*/

let filme = {
    titulo: "Velozes e Furiosos 10",    
    genero: "Ação", 
    anoLancamento: 2023,
    avaliacoes: [],
    avaliar: function(nota) {
        if (nota >= 0 && nota <= 10) {
            this.avaliacoes.push(nota);
            console.log(`Você avaliou o filme "${this.titulo}" com a nota ${nota}.`);
        } else {
            console.log("Por favor, insira uma nota entre 0 e 10.");
        }
    }
};
console.log(`Título: ${filme.titulo}`);
console.log(`Gênero: ${filme.genero}`);
console.log(`Ano de Lançamento: ${filme.anoLancamento}`);
console.log(`Avaliações: ${filme.avaliacoes}`);
filme.avaliar(8);
filme.avaliar(9);
console.log(`Avaliações após avaliações: ${filme.avaliacoes}`);





