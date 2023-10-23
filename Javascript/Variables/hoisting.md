# Hoisting

O hoisting é um comportamento peculiar do JavaScript que ocorre durante a fase de compilação do código. Ele se refere à elevação (ou içamento) de declarações de variáveis e funções para o topo do escopo em que foram definidas. Isso significa que, mesmo que você declare uma variável ou função em uma parte específica do código, o JavaScript irá tratá-la como se tivesse sido declarada no início do escopo. No entanto, apenas a declaração é içada, não a inicialização.

## Içamento de Variáveis (com `var`)

O código abaixo funciona mesmo que a variável `x` seja usada antes de ser declarada. Isso ocorre porque a declaração da variável `x` é içada para o topo do escopo, tornando `x` acessível, mas seu valor só é atribuído mais tarde.

```js
console.log(x); // Saída: undefined
var x = 5;
console.log(x); // Saída: 5
```

## Içamento de Funções

Neste exemplo, a função `sayHello` é chamada antes de ser declarada, mas o hoisting a move para o topo do escopo, permitindo que a chamada funcione corretamente.

```js
sayHello(); // Saída: "Hello!"
function sayHello() {
  console.log("Hello!");
}
```

## Içamento de Variáveis (com `let` e `const`)

Quando você declara uma variável usando `let` ou `const`, ela também é içada para o topo do escopo durante a fase de compilação, mas, ao contrário do `var`, essas variáveis não têm um valor padrão de `undefined`. Isso significa que, se você tentar acessar uma variável `let` ou `const` antes de inicializá-la com um valor, resultará em um erro de "ReferenceError". Isso ocorre porque essas variáveis não recebem um valor padrão de `undefined` durante o hoisting, tornando o código mais seguro e previsível.

```js
console.log(y); // Erro: y is not defined
let y = 10;
```

É uma boa prática declarar todas as variáveis no início do escopo em que são usadas e evitar depender do hoisting, pois o comportamento pode tornar o código menos claro e suscetível a erros. Além disso, o uso de `let` e `const` em vez de `var` reduz a probabilidade de comportamentos inesperados relacionados ao hoisting.
