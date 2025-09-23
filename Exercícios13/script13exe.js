//===================Exemplo de ForEach, Map, Filter, Find======================

const alunos = [
    {nome: "Ana", idade: 20},
    {nome: "Carlos", idade: 17},
    {nome: "Bianca", idade: 22},
    {nome: "Diego", idade: 16}  
];

alunos.forEach(aluno => {       //Exemplo usando ForEach.
    console.log(aluno.nome);
});

const nomes = alunos.map(aluno => aluno.nome); 
console.log(nomes);

const idades = alunos.map(aluno => aluno.idade); //Exemplo usando Map.
console.log(idades); //O Map lista por categoria no exemplo é NOME e IDADE.

const maiores = alunos.filter(aluno => aluno.idade >= 18); 
console.log(maiores);

const menores = alunos.filter(aluno => aluno.idade < 18); //Exemplo de Filter
console.log(menores); //O Filter faz um filtro dos ítens de um Array. 

const alunoCarlos = alunos.find(aluno => aluno.nome === "Carlos");
console.log(alunoCarlos);

const aluno22 = alunos.find(aluno => aluno.idade === 22); //Exemplo de Find
console.log(aluno22); //O find faz buscas específicas no Array.

const livros = [
    {titulo: "Dom Casmurro", preco: 25},
    {titulo: "O Hobbit", preco: 45},
    {titulo: "1984", preco: 30},
    {titulo: "Harry Potter", preco: 60}
];


//Usar o forEach para mostrar todos os titulos no console.

livros.forEach(mostrarTitulo => {
    console.log(mostrarTitulo.titulo);  
});

//Usar map para criar uma lista só com os preços.

const mostrarPrecos = livros.map(mostrarPreco => mostrarPreco.preco);
console.log(mostrarPrecos); //Usar o Map para criar um array com todos os preços.

//Usar filter para pegar apenas livros com preço menor que 40.

const precoMenor40 = livros.filter(precoMenor => precoMenor.preco < 40);
console.log(precoMenor40);

//Usar find para procurar um livro pelo título.

const buscarLivro = livros.find(buscarL => buscarL.titulo === "Harry Potter");
console.log(buscarLivro);








