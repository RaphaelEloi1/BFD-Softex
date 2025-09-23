//============================Lista====================================
/* 1. Crie um objeto chamado celular com as propriedades: marca,
modelo e ligado (true ou false).
  ○ Altere o valor de ligado para true e mostre no console.*/

let celular = {
    marca: "Samsung",
    modelo: "S25 Ultra",
    ligar: "True",
    ligado: function(){
        return `Tenho um ${this.marca} do modelo ${this.modelo} e ele está ${this.ligar ? "ligado" : "desligado"}`;
    }
}
    console.log(celular.ligado());
    celular.ligar = false;
    console.log(celular.ligado());


/* 2. Crie um objeto filme e adicione dinamicamente (depois de criado)
a propriedade genero.
  ○ Mostre o objeto no console com a nova propriedade.*/
let filme = {
    titulo: "Vingadores",
    ano: 2012,
    diretor: "Joss Whedon"
}
    filme.genero = "Ação";
    console.log(filme);

/* 3. Crie um objeto produto com nome, preco e estoque.
  ○ Aumente o estoque em +10 e mostre o novo valor no
console.*/

let produto = {
    nome: "Notebook",
    preco: 4500,
    estoque: 20
}
    produto.estoque += 10;
    console.log(produto.estoque);


/* 4. Crie um objeto lampada com a propriedade acesa (false por
padrão) e métodos ligar() e desligar() que mudam o valor da
propriedade.
  ○ Teste chamando os métodos.*/

  let lampada = {
    acesa: false,
    ligar: function(){
        this.acesa = true;
        return `A lâmpada está ${this.acesa ? "acesa" : "apagada"}`;
    },
    desligar: function(){
        this.acesa = false; 
        return `A lâmpada está ${this.acesa ? "acesa" : "apagada"}`;
    }
    }
    console.log(lampada.ligar());
    console.log(lampada.desligar());    


/* 5. Crie um objeto usuario com nome, senha e um método
login(senhaDigitada) que retorna “Acesso permitido” se a senha
for correta ou “Acesso negado” caso contrário.*/

let usuario = {
    nome: "admin",
    senha: "12345",
    login: function(senhaDigitada){
        if(senhaDigitada === this.senha){
            return "Acesso permitido";
        } else {
            return "Acesso negado";
        }
    }
}
    console.log(usuario.login("12345"));
    console.log(usuario.login("54321"));

/* 6. Crie um objeto aluno que tenha as propriedades nome e
endereco, onde endereco também é um objeto com rua, numero e
cidade.
  ○ Mostre no console: “O aluno [nome] mora na rua [rua], nº
[numero], em [cidade]”.*/

let aluno = {
    nome: "Danilo Barbosa",
    endereco: {
        rua: "Av. doutor Antonio da Rosa Borges",
        numero: 19,
        cidade: "Recife"
    },
    mostrarEndereco: function(){
        return `O aluno ${this.nome} mora na rua ${this.endereco.rua}, nº ${this.endereco.numero}, em ${this.endereco.cidade}.`;
    }

}
    console.log(aluno.mostrarEndereco());

/* 7. Crie um objeto pedido que contenha: cliente (objeto com nome e
telefone) e itens (array de strings).
  ○ Mostre no console o nome do cliente e o primeiro item do
pedido.*/

let pedido = {
    cliente: {
        nome: "Davi Barbosa",
        telefone: 81998765432
    },
    itens: ["Notebook", "Mouse", "Teclado"],
    mostrarPedido: function(){
        return `O cliente ${this.cliente.nome} fez o pedido do item: ${this.itens[0]}.`;
    }
}
    console.log(pedido.mostrarPedido());