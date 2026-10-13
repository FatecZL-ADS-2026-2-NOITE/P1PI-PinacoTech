# Documento de Requisitos · Cardápio Digital da Cantina

Time PinacoTech · Projeto Desafio 01 · Projeto Integrador · ADS Fatec Zona Leste
Versão 1.0 · produzido a partir da entrevista simulada registrada em `docs/entrevista.md`

> **Sobre a entrevista.** Foi simulada, com uma IA no papel da dona da cantina, conforme autorizado pelo professor. A cliente, Márcia, é uma personagem fictícia; as falas e os números entre aspas são dela.

## 1. Contexto do negócio

**Nome:** Cantina da Fatec Zona Leste
**Ramo:** alimentação, lanchonete e prato feito dentro da faculdade
**Porte:** microempresa com 3 pessoas: a dona, uma ajudante na cozinha e um atendente no balcão e caixa
**Tempo de mercado:** 9 anos
**Clientes:** alunos, em sua maioria; de manhã também professores e funcionários
**Diferencial:** salgados assados na hora, prato feito com preço acessível e uma opção sem carne todos os dias
**Tipo de produto:** vitrine (site estático, sem banco de dados e sem cadastro de clientes)

**Como opera hoje.** A cantina funciona das 7h às 22h30, com pico no intervalo da noite, das 21h às 21h20. Os preços ficam escritos numa lousa atrás do balcão, que quem está no fim da fila não consegue ler, e o prato do dia é avisado de boca. Ao chegar no balcão, quase todo aluno pergunta o preço e o que tem sem carne antes de decidir; o atendente responde, o aluno escolhe, paga, e a cozinha separa o pedido. Quando a fila está grande, a dona também vai para o balcão. Os itens e preços ficam num caderno no caixa, onde a dona risca e reescreve quando algo muda. Uma folha impressa no vidro e posts no Instagram já foram tentados, mas ficavam desatualizados ou ninguém consultava.

## 2. Dores identificadas

1. **Pergunta repetida que trava a fila.** "É sempre a mesma: preço e o que tem sem carne. A fila para enquanto a gente responde." São cerca de **40 perguntas em um intervalo de 20 minutos**.
2. **Venda perdida por causa da fila.** "Muita gente vê a fila e desiste." A fila leva cerca de **12 minutos** num intervalo de 20, e cerca de **15 alunos desistem por noite**, o que dá aproximadamente **R$ 120 por noite** e, pela estimativa da própria dona, **cerca de R$ 2.400 por mês** em vendas perdidas (conta aproximada, feita durante a entrevista).
3. **Item que acaba sem aviso.** "O aluno escolhe na fila, chega no caixa e descobre que não tem mais." O enroladinho e o bolo acabam antes das 21h quase todo dia, e a fila para de novo enquanto o aluno escolhe outra coisa.
4. **Insegurança de quem é vegetariano.** "Eles perguntam item por item." Um aluno relatou já ter comido só suco por não ter certeza do que tinha carne.

## 3. Escopo

**O que o site vai fazer:**
- mostrar todos os itens do cardápio com foto, nome, categoria, preço, calorias e descrição;
- indicar quais itens são vegetarianos e quais acabaram no dia;
- permitir buscar pelo nome e filtrar por categoria, por vegetariano e por faixa de preço;
- abrir no celular a partir de um QR Code no balcão e nas mesas.

**O que o site não vai fazer** (pedido da própria cliente ou fora do escopo da disciplina):
- receber pedidos pelo celular;
- receber pagamentos;
- cadastrar alunos ou guardar qualquer dado pessoal;
- ter área para a dona editar o cardápio; as mudanças são feitas pelo time no arquivo `dados.js`;
- atualizar a disponibilidade em tempo real.

**Premissas e restrições:**
- desenvolvido só com HTML, CSS e JavaScript puro, sem servidor, banco de dados ou bibliotecas, conforme as regras do desafio;
- as fotos são de bancos de imagens livres, com o mesmo tipo de comida, autorizado pela cliente, e com a fonte creditada no README;
- prazo de desenvolvimento de dois dias.

## 4. Requisitos funcionais

| Código | Requisito | Prioridade | Critério de aceite |
| --- | --- | --- | --- |
| RF01 | O sistema deve exibir os itens do cardápio em cartões gerados a partir dos dados. | Essencial | Acrescentar um item no `dados.js` faz aparecer um cartão novo. |
| RF02 | O sistema deve mostrar em cada cartão a foto, a categoria, o nome e o preço do item. | Essencial | Todos os cartões exibem os quatro campos. |
| RF03 | O sistema deve permitir buscar itens pelo nome enquanto o usuário digita. | Essencial | Digitar "coxi" mostra a coxinha sem apertar nenhum botão. |
| RF04 | O sistema deve ignorar maiúsculas e acentos na busca. | Importante | "pao" e "PÃO" encontram o Pão de queijo. |
| RF05 | O sistema deve permitir filtrar os itens por categoria, com opção de voltar para todas. | Essencial | Escolher "Bebida" mostra só bebidas; "Todas" volta à lista completa. |
| RF06 | O sistema deve permitir mostrar apenas os itens vegetarianos. | Essencial | Marcar a opção esconde todos os itens com carne. |
| RF07 | O sistema deve permitir filtrar os itens por preço máximo. | Essencial | Com máximo R$ 8, itens de R$ 8 aparecem e itens de R$ 8,50 não. |
| RF08 | O sistema deve aplicar busca, categoria, vegetariano e preço ao mesmo tempo. | Essencial | Vegetariano com máximo R$ 5 mostra só itens que atendem às duas condições. |
| RF09 | O sistema deve exibir quantos itens estão aparecendo na tela. | Importante | O contador sempre bate com o número de cartões visíveis. |
| RF10 | O sistema deve exibir uma mensagem quando nenhum item for encontrado. | Importante | Buscar um item inexistente mostra a mensagem, nunca a tela vazia. |
| RF11 | O sistema deve exibir todas as informações do item ao clicar em "Ver detalhes". | Essencial | A janela mostra foto, nome, preço, categoria, vegetariano, calorias, disponibilidade e descrição. |
| RF12 | O sistema deve permitir fechar o detalhe e voltar ao cardápio. | Essencial | O X e o botão "Voltar ao cardápio" fecham a janela. |
| RF13 | O sistema deve sinalizar os itens indisponíveis no dia. | Importante | Item indisponível mostra o selo e a foto em preto e branco. |

## 5. Requisitos não funcionais

- **RNF01 · Celular.** O site deve funcionar em telas a partir de 400px de largura, sem rolagem horizontal, porque será aberto por QR Code.
- **RNF02 · Desempenho.** As imagens devem ter no máximo 800×600 pixels, para o cardápio carregar rápido na internet do celular.
- **RNF03 · Leitura rápida.** Preço e nome devem ter destaque no cartão, para o aluno decidir em poucos segundos na fila.
- **RNF04 · Acessibilidade.** Os campos de busca e filtro devem ter rótulo, e as imagens devem ter texto alternativo.
- **RNF05 · Compatibilidade.** O site deve abrir com dois cliques no `index.html`, sem servidor, nos navegadores atuais de computador e celular.
- **RNF06 · Privacidade.** O site não deve coletar nenhum dado pessoal do aluno.

## 6. Validação

**Data da entrevista (simulada):** 13/10/2026
**Entrevistada:** Márcia, personagem fictícia interpretada por IA (Claude) · **Papel:** dona da cantina
**Entrevistador:** José Mario
**Validação:** resumo apresentado à personagem na própria simulação (Bloco 7 de `docs/entrevista.md`), em 13/10/2026.

**Correções pedidas pela cliente na validação:**
- "Quando a fila está grande, eu também vou para o balcão." → incluído em "Como opera hoje".
- "O valor de R$ 2.400 por mês é uma conta de cabeça, não é exato." → a dor 2 passou a indicar que é uma estimativa.

**Confirmação:**
[x] A cliente (personagem da simulação) confirmou que o entendimento acima está correto, com as duas correções, em 13/10/2026.
