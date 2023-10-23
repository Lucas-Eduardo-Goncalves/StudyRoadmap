# Declarações variáveis

No Javascript, as variáveis são utilizadas para armazenar e manipular dados. Elas são elementos fundamentais na linguagem, permitindo que você atribua valores a um nome simbólico (a variável) e depois utilize esse nome para acessar e modificar os dados armazenados. Existem três tipos principais de variáveis em Javascript: `var`, `let` e `const`, cada um com características e finalidades diferentes:

## `var`

Variáveis declaradas com `var` têm escopo de função ou escopo global, o que significa que elas são acessíveis em toda a função ou no escopo global do programa. No entanto, `var` não respeita o escopo de bloco, o que pode levar a comportamentos inesperados. Essa variável pode ser redeclarada.

```js
var x = 10;

function example() {
  var x = 20; // Variável local à função
  console.log(x); // Imprimirá 20
}

console.log(x); // Imprimirá 10
```

## `let`

Variáveis declaradas com `let` têm escopo de bloco, o que significa que elas são acessíveis apenas dentro do bloco onde foram declaradas. O uso de `let` ajuda a evitar problemas de escopo e permite a redeclaração no mesmo escopo.

```js
let y = 10;

if (true) {
  let y = 20; // Variável local ao bloco if
  console.log(y); // Imprimirá 20
}

console.log(y); // Imprimirá 10
```

## `const`

Variáveis declaradas com const também têm escopo de bloco e não podem ser reatribuídas após a inicialização. Elas são usadas para declarar valores constantes, que não devem ser alterados durante a execução do programa.

```js
const z = 10;
// Não é permitido: z = 20; resultará em um erro
```

A finalidade das variáveis em Javascript é armazenar e manipular dados de maneira flexível. Elas são essenciais para controlar o fluxo de um programa, armazenar informações temporárias, como resultados de cálculos ou valores fornecidos pelo usuário, e são fundamentais na criação de estruturas de controle, como loops e condicionais. O uso apropriado das diferentes declarações de variáveis (`var`, `let` e `const`) ajuda a garantir um código mais limpo e robusto, evitando bugs relacionados ao escopo e à mutabilidade dos valores.
