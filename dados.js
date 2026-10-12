const ITENS = [
  {
    id: 1,
    item: "Pão de queijo",
    categoria: "Salgado",
    preco: 7.5,
    vegetariano: true,
    calorias: 280,
    disponivel: true,
    descricao: "Sai do forno várias vezes ao dia, crocante por fora e macio por dentro. A porção vem com três, perfeita para acompanhar um café entre uma aula e outra.",
    imageUrl: "img/pao-de-queijo.jpg"
  },
  {
    id: 2,
    item: "Coxinha de frango",
    categoria: "Salgado",
    preco: 8,
    vegetariano: false,
    calorias: 310,
    disponivel: true,
    descricao: "Massa sequinha e recheio generoso de frango desfiado e bem temperado. Um clássico da cantina que mata a fome rapidinho.",
    imageUrl: "img/coxinha-de-frango.jpg"
  },
  {
    id: 3,
    item: "Esfiha de escarola",
    categoria: "Salgado",
    preco: 7,
    vegetariano: true,
    calorias: 250,
    disponivel: true,
    descricao: "Esfiha aberta e assada, com escarola refogada e queijo derretido por cima. Leve, saborosa e sem carne.",
    imageUrl: "img/esfiha-de-escarola.jpg"
  },
  {
    id: 4,
    item: "Enroladinho de salsicha",
    categoria: "Salgado",
    preco: 6.5,
    vegetariano: false,
    calorias: 290,
    disponivel: false,
    descricao: "Salsicha envolvida numa massa fofinha e assada até dourar. Faz sucesso e costuma acabar antes do intervalo da noite, então vale chegar cedo.",
    imageUrl: "img/enroladinho-de-salsicha.jpg"
  },
  {
    id: 5,
    item: "Brigadeiro",
    categoria: "Doce",
    preco: 4,
    vegetariano: true,
    calorias: 120,
    disponivel: true,
    descricao: "Aquele brigadeiro de festa, cremoso e coberto de granulado. O docinho certo para fechar o lanche.",
    imageUrl: "img/brigadeiro.jpg"
  },
  {
    id: 6,
    item: "Bolo de cenoura",
    categoria: "Doce",
    preco: 6.5,
    vegetariano: true,
    calorias: 330,
    disponivel: false,
    descricao: "Fatia fofinha de bolo de cenoura com uma camada caprichada de cobertura de chocolate. Tem gosto de lanche da tarde em casa.",
    imageUrl: "img/bolo-de-cenoura.jpg"
  },
  {
    id: 7,
    item: "Café coado",
    categoria: "Bebida",
    preco: 4.5,
    vegetariano: true,
    calorias: 5,
    disponivel: true,
    descricao: "Coado na hora e servido sem açúcar, para você adoçar do seu jeito. Copo de 200 ml para encarar a próxima aula.",
    imageUrl: "img/cafe-coado.jpg"
  },
  {
    id: 8,
    item: "Suco de laranja",
    categoria: "Bebida",
    preco: 8,
    vegetariano: true,
    calorias: 110,
    disponivel: true,
    descricao: "Laranja espremida na hora, sem nada adicionado. Copo de 300 ml, geladinho e refrescante.",
    imageUrl: "img/suco-de-laranja.jpg"
  },
  {
    id: 9,
    item: "Refrigerante lata",
    categoria: "Bebida",
    preco: 6,
    vegetariano: true,
    calorias: 140,
    disponivel: true,
    descricao: "Lata de 350 ml bem gelada. Os sabores variam conforme o estoque do dia, então pergunte no balcão.",
    imageUrl: "img/refrigerante-lata.jpg"
  },
  {
    id: 10,
    item: "PF de frango grelhado",
    categoria: "Prato do dia",
    preco: 22,
    vegetariano: false,
    calorias: 650,
    disponivel: true,
    descricao: "Prato completo com arroz, feijão, salada fresca e um filé de frango grelhado suculento. Comida de verdade para quem tem aula até tarde.",
    imageUrl: "img/pf-de-frango-grelhado.jpg"
  },
  {
    id: 11,
    item: "PF de strogonoff de grão-de-bico",
    categoria: "Prato do dia",
    preco: 20,
    vegetariano: true,
    calorias: 580,
    disponivel: true,
    descricao: "Strogonoff cremoso de grão-de-bico com arroz soltinho, batata palha e salada. A opção vegetariana que agrada até quem come carne.",
    imageUrl: "img/pf-de-strogonoff-de-grao-de-bico.jpg"
  },
  {
    id: 12,
    item: "PF de carne moída",
    categoria: "Prato do dia",
    preco: 21,
    vegetariano: false,
    calorias: 690,
    disponivel: true,
    descricao: "Arroz, feijão, salada e carne moída refogada com legumes, do jeito caseiro. Um prato que sustenta e cabe no bolso.",
    imageUrl: "img/pf-de-carne-moida.jpg"
  },
  {
    id: 13,
    item: "Paçoca do samurai",
    categoria: "Doce",
    preco: 8,
    vegetariano: true,
    calorias: 110,
    disponivel: false,
    descricao: "Paçoquita do samurai, doce, mas não ao ponto de ser enjuativa. Tão gostosa que você não vai querer nem compartilhá-la com seus colegas",
    imageUrl: "img/pacoca-samurai.jpg"
  }
];