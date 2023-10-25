## Array

**Arrays (Matrizes) em Javascript:** Um array é uma estrutura de dados em Javascript que permite armazenar uma coleção de itens em uma única variável. Cada item em um array pode ser acessado por um índice numérico. Os arrays são uma das estruturas de dados mais fundamentais e amplamente usadas em Javascript, e eles desempenham um papel crucial na organização e manipulação de dados.

Aqui estão os principais conceitos relacionados a arrays em Javascript:

**Declarando um Array:**
Para criar um array em Javascript, você pode usar colchetes `[]` e, opcionalmente, preencher o array com elementos.

```js
let frutas = ["Maçã", "Banana", "Laranja", "Morango"];
```

**Índices Numéricos:**
Cada elemento em um array é associado a um índice numérico. Os índices começam em zero para o primeiro elemento, um para o segundo, e assim por diante.

```js
console.log(frutas[0]); // Saída: Maçã
console.log(frutas[2]); // Saída: Laranja
```

**Métodos de Array:**
Arrays em Javascript têm uma variedade de métodos embutidos que permitem realizar várias operações, como adicionar ou remover elementos, percorrer o array, pesquisar, classificar e muito mais. Alguns métodos comuns incluem `push`, `pop`, `shift`, `unshift`, `forEach`, `map`, `filter`, `find`, `sort`, `concat`, entre outros.

```javascript
// Adicionar um elemento ao final do array
frutas.push("Pêra");

// Remover o último elemento do array
frutas.pop();

// Iterar sobre o array com forEach
frutas.forEach(function (fruta) {
  console.log(fruta);
});
```

**Tamanho do Array:**
Você pode obter o tamanho de um array usando a propriedade `length`.

```js
console.log(frutas.length); // Saída: 4 (após adicionar Pêra e remover)
```

**Acessando e Modificando Elementos:**
Você pode acessar elementos existentes ou modificar elementos em um array usando seus índices.

```js
frutas[1] = "Uva"; // Modifica o segundo elemento para 'Uva'
```

**Arrays Multidimensionais:**
Javascript permite criar arrays multidimensionais, onde cada elemento é, na verdade, outro array.

```js
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matriz[1][2]); // Acessa o valor 6
```
