# Lista de Entidades e Atributos · Cardápio Digital da Cantina

Time PinacoTech · Rascunho do MER (Anexo B)

Regra usada: substantivo vira entidade, característica vira atributo, e verbo que liga dois substantivos vira relação.

Hoje, no `dados.js`, a categoria é um texto dentro de cada item e a restrição alimentar é o campo `vegetariano` (verdadeiro ou falso). No modelo abaixo, as duas viram entidades próprias, como vão ficar no banco de dados na segunda metade do semestre.

## Entidade: Item

Um produto vendido na cantina.

| Atributo | Tipo | Identificador? | Observação |
| --- | --- | --- | --- |
| id | número | Sim | gerado automaticamente |
| nome | texto | Não | obrigatório; no `dados.js` é a propriedade `item` |
| preco | número (decimal) | Não | obrigatório, em reais, maior que zero |
| calorias | número | Não | quilocalorias por porção |
| disponivel | verdadeiro/falso | Não | `false` quando acabou no dia |
| descricao | texto | Não | aparece na janela de detalhe |
| imageUrl | texto | Não | caminho da foto na pasta `img/` |
| categoriaId | número | Não | chave estrangeira para Categoria |

## Entidade: Categoria

O grupo a que o item pertence no cardápio.

| Atributo | Tipo | Identificador? | Observação |
| --- | --- | --- | --- |
| id | número | Sim | gerado automaticamente |
| nome | texto | Não | obrigatório e único: Salgado, Doce, Bebida ou Prato do dia |

## Entidade: Restricao

Uma característica alimentar do item, usada nos filtros.

| Atributo | Tipo | Identificador? | Observação |
| --- | --- | --- | --- |
| id | número | Sim | gerado automaticamente |
| nome | texto | Não | obrigatório e único; hoje só existe "Vegetariano", mas o modelo permite outras, como "Sem lactose" ou "Sem glúten" |

## Entidade associativa: ItemRestricao

Liga os itens às suas restrições, porque a relação entre os dois é de muitos para muitos.

| Atributo | Tipo | Identificador? | Observação |
| --- | --- | --- | --- |
| itemId | número | Sim (composto) | chave estrangeira para Item |
| restricaoId | número | Sim (composto) | chave estrangeira para Restricao |

## Relações

- Um Item pertence a uma Categoria. (1 para N)
- Uma Categoria pode ter vários Itens. (1 para N)
- Um Item pode ter várias Restrições (N para N)
  e uma Restrição pode valer para vários Itens.

## Do modelo para o dados.js

| No modelo | No `dados.js` hoje |
| --- | --- |
| Item.nome | `item` |
| Item.categoriaId → Categoria.nome | `categoria` (texto direto no item) |
| ItemRestricao com a restrição "Vegetariano" | `vegetariano: true` |
| Demais atributos de Item | mesmo nome no objeto |
