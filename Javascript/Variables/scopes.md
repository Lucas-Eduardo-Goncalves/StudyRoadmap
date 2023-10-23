# Escopo

Em JavaScript, escopo refere-se à visibilidade de uma variável ou como ela pode ser usada após ser declarada. O escopo de uma variável depende da palavra-chave usada para declará-la.

Os três tipos de escopo são: escopo global, escopo de função e escopo de bloco. Antes do ES6 (2015), o JavaScript tinha apenas Escopo Global e Escopo de Função com a palavra-chave `var`.
ES6 introduziu `let` e `const` que permitem Block Scope em JavaScript.

## Escopo Global

Variáveis ​​declaradas fora de qualquer função ou chaves `{}` possuem Escopo Global e podem ser acessadas de qualquer lugar dentro do mesmo código Javascript. `var`, `let` e `const` fornecem esse escopo.

```js
var globalVar = 30; // Variável com escopo global

function exemplo() {
  console.log(globalVar); // Acesso à variável global
}

exemplo(); // Chama a função
console.log(globalVar); // Acesso à variável global fora da função
```

## Escopo da Função (com `var`)

Variáveis ​​declaradas dentro de uma função só podem ser usadas dentro dessa mesma função. Fora dessa função, eles são indefinidos. `var`, `let` e `const` fornecem esse escopo.

```js
function exemplo() {
  if (true) {
    var z = 40; // Variável com escopo de função, mas não de bloco
    console.log(z); // Acesso dentro da função
  }
  console.log(z); // Acesso dentro da função
}

exemplo(); // Chama a função
console.log(z); // Erro: z não está definido fora da função
```

## Escopo do bloco

Um bloco é qualquer parte do código JavaScript delimitada por `{}`. Variáveis ​​declaradas dentro de um bloco não podem ser acessadas fora desse bloco.

Este escopo é fornecido apenas pelas palavras-chave `let` e `const`. Se você declarar uma variável dentro de um bloco usando a palavra-chave `var`, ela **NÃO** terá escopo de bloco.

```js
if (true) {
  let y = 20; // Variável com escopo de bloco
  console.log(y); // Acesso dentro do bloco
}

console.log(y); // Erro: y não está definido neste escopo
```

## Escopo Local

Variáveis ​​locais só são reconhecidas dentro de suas funções, variáveis ​​com o mesmo nome podem ser utilizadas em funções diferentes. Variáveis ​​locais são criadas quando uma função é iniciada, e excluído quando a função for concluída. var, let e const fornecem esse escopo.

```js
function exemplo() {
  var x = 10; // Variável com escopo local
  console.log(x); // Acesso dentro da função
}

exemplo(); // Chama a função
console.log(x); // Erro: x não está definido neste escopo
```
