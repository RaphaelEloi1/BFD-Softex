/*Crie um objeto biblioteca com:
  1. Propriedade livros(Array de objetos com titulo e disponível).
  2. Método emprestar(titulo) -> Se o livro estiver disponível, muda para false
  e mostra "Livro emprestado".
  3. Método devolver(título) -> Muda para true e mostra "Livro devolvido".
  4. Método ListarDisponiveis() -> Mostra todos os livros com disponível: true.
Teste com pelo menos 3 livros.*/

const biblioteca = {
  livros: [
    { titulo: "Dom Casmurro", disponivel: true },
    { titulo: "O Pequeno Príncipe", disponivel: true },
    { titulo: "1984", disponivel: true }
  ],

  // Método para emprestar um livro
  emprestar(titulo) {
    const livro = this.livros.find(livro => livro.titulo === titulo);
    if (livro && livro.disponivel) {
      livro.disponivel = false;
      console.log(`✅ "${livro.titulo}" foi emprestado.`);
    } else {
      console.log(`⚠️ Livro "${titulo}" está indisponível ou não existe.`);
    }
  },

  // Método para devolver um livro
  devolver(titulo) {
    const livro = this.livros.find(livro => livro.titulo === titulo);
    if (livro) {
      livro.disponivel = true;
      console.log(`📚 "${livro.titulo}" foi devolvido.`);
    } else {
      console.log(`⚠️ Livro "${titulo}" não encontrado.`);
    }
  },

  // Método para listar todos os livros disponíveis
  listarDisponiveis() {
    const disponiveis = this.livros.filter(livro => livro.disponivel);
    if (disponiveis.length === 0) {
      console.log("🚫 Nenhum livro disponível no momento.");
    } else {
      console.log("📖 Livros disponíveis:");
      disponiveis.forEach(livro => console.log(`- ${livro.titulo}`));
    }
  }
};

// =====================
// Testes
// =====================
biblioteca.listarDisponiveis();       // Lista todos
biblioteca.emprestar("1984");         // Empresta "1984"
biblioteca.listarDisponiveis();       // Lista sem "1984"
biblioteca.devolver("1984");          // Devolve "1984"
biblioteca.listarDisponiveis();       // Lista novamente com "1984"




