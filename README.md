# P1PI-PinacoTech
# Cardápio Digital da Cantina

Projeto Desafio 01 · Vitrine Interativa
Projeto Integrador · Análise e Desenvolvimento de Sistemas · Fatec Zona Leste
Prof. Rodrigo dos Santos Faustino

**Projeto sorteado:** Projeto 8 · Cardápio Digital da Cantina
**Cliente:** Cantina da Fatec
**Time:** PinacoTech

## O problema

Na entrevista simulada com a cantina (uma IA no papel da dona, como o professor autorizou, registrada em `docs/entrevista.md`), levantamos que a fila do intervalo da noite trava porque quase todo aluno pergunta o preço e o que tem sem carne antes de pedir. Os preços ficam numa lousa que não dá para ler do fim da fila, e os itens que acabam só são descobertos no caixa.

A solução é um cardápio aberto por QR Code no balcão e nas mesas, para o aluno chegar ao caixa já sabendo o que quer e quanto vai pagar.

## O que o site faz

- Lista os itens do cardápio em cartões gerados pelo JavaScript a partir do array em `dados.js`
- Busca por nome enquanto a pessoa digita, ignorando maiúsculas e acentos
- Filtro por categoria: Salgado, Doce, Bebida e Prato do dia, com opção de voltar para todas
- Contador de quantos itens estão aparecendo
- Janela de detalhe com todas as informações do item ao clicar em "Ver detalhes"
- Mensagem quando nenhum item atende à busca
- **Diferencial do projeto:** filtro combinado. A pessoa marca "Apenas vegetarianos" e informa um preço máximo, e a lista mostra só os itens que atendem às duas condições ao mesmo tempo

## Como abrir o site

1. Clone o repositório ou baixe o ZIP pelo botão **Code › Download ZIP**
2. Abra o arquivo `index.html` com dois cliques

Não precisa de servidor nem de instalar nada. Funciona em qualquer navegador atual, no computador e no celular.

## Estrutura

```
index.html      página única
style.css       todo o estilo
dados.js        somente o array de objetos com os itens
script.js       somente a lógica
img/            fotos dos itens (800×600)
docs/
  entrevista.md   transcrição da entrevista simulada
  requisitos.md   documento de requisitos
  entidades.md    lista de entidades e atributos
```

## Integrantes e o que cada um fez

| Integrante | Parte | O que fez |
| --- | --- | --- |
| Pablo Ornelas Pimentel | Dados, busca e JavaScript | Criou o repositório e o Kanban. Montou o array de itens em `dados.js` e a pasta de imagens. Fez a área de busca e filtros no HTML e todo o `script.js`: renderização dos cartões, busca sem acentos, filtro por categoria, filtro combinado de vegetariano e preço, contador, estado vazio e janela de detalhe. |
| Nicolas Domingos | Lista de cartões | Montou a estrutura inicial do projeto. Fez o estilo dos cartões, da grade responsiva e dos controles, trocou as imagens provisórias pelas fotos, corrigiu o id da janela de detalhe, travou a rolagem da página com a janela aberta e acrescentou um item ao cardápio. |
| Matteus Lino | Detalhe do item | Fez o HTML e o CSS da janela de detalhe, com fundo escurecido, foto, informações e botões de fechar e voltar, e a responsividade da página para celular. |
| José Mario | Cabeçalho, rodapé e documentação | Definiu a paleta e as fontes no `:root`, fez o cabeçalho com a busca e os links e o rodapé com o time e a disciplina. Conduziu a entrevista simulada com a cantina (IA no papel da dona) e escreveu `docs/entrevista.md`, `docs/requisitos.md`, `docs/entidades.md` e este README. |

## Tecnologias

HTML5 semântico, CSS3 (Flexbox e Grid) e JavaScript puro, sem frameworks, bibliotecas ou servidor, conforme as regras do desafio.
