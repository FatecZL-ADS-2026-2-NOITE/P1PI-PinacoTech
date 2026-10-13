# Lista de Entidades e Atributos · Cardápio Digital da Cantina

Time PinacoTech · Projeto Desafio 01 · Rascunho do MER (Anexo B) · Versão 1.0

**Como chegamos aqui.** Relemos a entrevista simulada (`docs/entrevista.md`) e aplicamos a regra da aula: substantivo vira entidade, característica vira atributo, e verbo que liga dois substantivos vira relação.

| Na entrevista | Tipo de palavra | Virou |
| --- | --- | --- |
| "item", "salgado", "PF" | substantivo | entidade **Item** |
| "salgado, doce, bebida e o prato do dia" | substantivo | entidade **Categoria** |
| "sem carne", "vegetariano" | substantivo | entidade **Restricao** |
| "quanto é", "se acabou", "calorias" | característica | atributos de Item |
| "o item **é** de uma categoria" | verbo ligando dois substantivos | relação Item–Categoria |
| "o item **é** sem carne" | verbo ligando dois substantivos | relação Item–Restricao |

No `dados.js` atual, a categoria é um texto dentro de cada item e a restrição é o campo `vegetariano` (verdadeiro ou falso). Neste modelo, as duas viram entidades próprias, como vão ficar no banco de dados na segunda metade do semestre.

## Entidade: Item

Um produto vendido na cantina.

| Atributo | Tipo | Identificador? | Observação |
| --- | --- | --- | --- |
| id | número | Sim | gerado automaticamente |
| nome | texto | Não | obrigatório; no `dados.js` é a propriedade `item` |
| preco | número decimal | Não | obrigatório, em reais, maior que zero |
| calorias | número inteiro | Não | quilocalorias por porção |
| disponivel | verdadeiro/falso | Não | `false` quando acabou no dia |
| descricao | texto | Não | aparece na janela de detalhe |
| imageUrl | texto | Não | caminho da foto na pasta `img/` |
| categoriaId | número | Não | chave estrangeira para Categoria |

## Entidade: Categoria

O grupo a que o item pertence no cardápio, igual ao que está na lousa da cantina.

| Atributo | Tipo | Identificador? | Observação |
| --- | --- | --- | --- |
| id | número | Sim | gerado automaticamente |
| nome | texto | Não | obrigatório e único: Salgado, Doce, Bebida ou Prato do dia |

## Entidade: Restricao

Uma característica alimentar do item, usada nos filtros.

| Atributo | Tipo | Identificador? | Observação |
| --- | --- | --- | --- |
| id | número | Sim | gerado automaticamente |
| nome | texto | Não | obrigatório e único; hoje só "Vegetariano", mas o modelo aceita outras, como "Sem lactose" |

## Entidade associativa: ItemRestricao

Liga os itens às restrições, porque a relação entre os dois é de muitos para muitos.

| Atributo | Tipo | Identificador? | Observação |
| --- | --- | --- | --- |
| itemId | número | Sim (composto) | chave estrangeira para Item |
| restricaoId | número | Sim (composto) | chave estrangeira para Restricao |

## Relações

- Um Item pertence a uma Categoria. (1 para N)
- Uma Categoria pode ter vários Itens. (1 para N)
- Um Item pode ter várias Restrições (N para N)
  e uma Restrição pode valer para vários Itens.

## Dados sensíveis (LGPD)

Nenhum. O site não guarda nada sobre os alunos, só sobre os produtos da cantina.

## Do modelo para o dados.js

| No modelo | No `dados.js` hoje |
| --- | --- |
| Item.nome | `item` |
| Item.categoriaId → Categoria.nome | `categoria` (texto direto no item) |
| ItemRestricao com a restrição "Vegetariano" | `vegetariano: true` |
| Demais atributos de Item | mesmo nome no objeto |
