# Documento de Requisitos · Cardápio Digital da Cantina

Time PinacoTech · Projeto Desafio 01 · Projeto Integrador · ADS Fatec Zona Leste

> **Antes de entregar:** os trechos entre [colchetes] precisam ser preenchidos com o que a pessoa entrevistada respondeu. O professor avalia se as informações vieram de uma entrevista de verdade, então troquem os exemplos pelas palavras e pelos números reais e apaguem este aviso.

## 1. Contexto do negócio

**Nome:** Cantina da Fatec Zona Leste
**Ramo:** alimentação (lanchonete e refeições dentro da faculdade)
**Porte:** [ex.: microempresa, com X funcionários no balcão e na cozinha]
**Há quanto tempo existe:** [ex.: X anos]
**Clientes:** alunos, professores e funcionários da Fatec, principalmente nos intervalos da manhã e da noite.
**Diferencial:** [ex.: salgados assados na hora, prato feito com preço acessível, opção vegetariana todo dia]

**Como opera hoje:** [Descrever em texto corrido, com as palavras do entrevistado. Ex.: os preços ficam numa lousa atrás do balcão, que nem todo mundo consegue ler da fila. O prato do dia muda e é avisado de boca. Quando um salgado acaba, a informação só chega quando o aluno já está no caixa. Nos intervalos, a maior parte das perguntas é sobre preço e sobre o que não tem carne.]

## 2. Dores identificadas

Escritas como o cliente falou. Pelo menos uma precisa de número.

1. "[Frase do entrevistado sobre perguntas repetidas.]" Ex.: no intervalo da noite, o atendente responde cerca de [X] vezes a mesma pergunta sobre preço.
2. "[Frase sobre opções sem carne.]" Ex.: quem é vegetariano precisa perguntar item por item o que pode comer.
3. "[Frase sobre itens que acabam.]" Ex.: o aluno escolhe, espera na fila e descobre no caixa que o item acabou.
4. [Opcional: outra dor que aparecer na conversa, como a fila parada ou o tempo de intervalo curto.]

**Dor quantificada:** [ex.: a fila do intervalo da noite leva cerca de X minutos, e o intervalo tem 15 minutos.]

## 3. Escopo

**O site vai:**
- mostrar todos os itens do cardápio com nome, categoria, preço, calorias, foto e descrição;
- indicar quais itens são vegetarianos e quais estão indisponíveis no dia;
- permitir buscar pelo nome e filtrar por categoria;
- permitir combinar o filtro de vegetariano com um preço máximo;
- funcionar no celular, aberto por um QR Code.

**O site não vai:**
- receber pedidos nem pagamentos;
- ter login de aluno ou de funcionário;
- ter área para a cantina editar o cardápio (os dados ficam no arquivo `dados.js`);
- atualizar a disponibilidade em tempo real (é atualizada no arquivo, quando a cantina avisar).

**Premissas e restrições:**
- feito só com HTML, CSS e JavaScript puro, sem servidor, banco de dados ou bibliotecas;
- os preços e itens são os informados pela cantina na entrevista e podem mudar;
- prazo de desenvolvimento de dois dias.

## 4. Requisitos funcionais

- **RF01.** O sistema deve exibir os itens do cardápio em cartões gerados a partir dos dados.
- **RF02.** O sistema deve mostrar em cada cartão a foto, a categoria, o nome e o preço do item.
- **RF03.** O sistema deve permitir buscar itens pelo nome enquanto o usuário digita.
- **RF04.** O sistema deve ignorar maiúsculas e acentos na busca.
- **RF05.** O sistema deve permitir filtrar os itens por categoria.
- **RF06.** O sistema deve permitir voltar a mostrar todas as categorias.
- **RF07.** O sistema deve permitir mostrar apenas os itens vegetarianos.
- **RF08.** O sistema deve permitir filtrar os itens por preço mínimo e preço máximo.
- **RF09.** O sistema deve aplicar busca, categoria, vegetariano e preço ao mesmo tempo.
- **RF10.** O sistema deve exibir quantos itens estão aparecendo na tela.
- **RF11.** O sistema deve exibir uma mensagem quando nenhum item for encontrado.
- **RF12.** O sistema deve exibir todas as informações do item ao clicar em "Ver detalhes".
- **RF13.** O sistema deve permitir fechar o detalhe e voltar ao cardápio.
- **RF14.** O sistema deve sinalizar os itens vegetarianos e os indisponíveis no dia.

## 5. Requisitos não funcionais

- **RNF01.** O site deve funcionar em telas a partir de 400px de largura, sem rolagem horizontal.
- **RNF02.** O site deve abrir com dois cliques no `index.html`, sem servidor.
- **RNF03.** As imagens devem ter no máximo 800×600 pixels para carregar rápido no celular.
- **RNF04.** Os campos de busca e filtro devem ter rótulo, e as imagens devem ter texto alternativo.
- **RNF05.** O site deve funcionar nos navegadores atuais de computador e celular.
- [Acrescentar o que mais aparecer na entrevista, como letra grande para leitura rápida na fila.]

## 6. Validação

**Data da entrevista:** [dd/mm/2026]
**Entrevistado:** [nome]
**Papel:** [ex.: dono da cantina, atendente, ou colega no papel da cantina]
**Entrevistadores:** [nomes do time]

Confirmação do entrevistado de que o entendimento está correto:

[ ] Confirmo que as informações acima representam o funcionamento e as necessidades da cantina.

Assinatura ou confirmação por mensagem: ______________________
