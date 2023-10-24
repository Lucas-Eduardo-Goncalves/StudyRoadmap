# Typeof

O operador `typeof` (em inglês, "typeOf") é uma ferramenta fundamental em Javascript que permite descobrir o tipo de dado de uma variável. Ele é usado para determinar se uma variável contém um número, uma string, um objeto, uma função ou outro tipo de dado. O `typeof` é uma maneira útil de verificar o tipo de uma variável antes de realizar operações específicas, garantindo que o código funcione corretamente e evitando erros.

Aqui estão os principais pontos sobre o operador `typeof`:

## Uso do Operador typeof

O operador `typeof` é seguido por uma variável ou expressão cujo tipo de dado você deseja verificar.
Ele retorna uma string que representa o tipo de dado da variável.

```javascript
var numero = 42;
var texto = "Olá, mundo!";
console.log(typeof numero); // Saída: "number"
console.log(typeof texto); // Saída: "string"
```

## Tipos de Dados em JavaScript

JavaScript possui diversos tipos de dados, incluindo, entre outros, números (number), strings (string), objetos (object), funções (function), booleanos (boolean), símbolos (symbol) e valores especiais como `null` e `undefined`.

O operador `typeof` ajuda a identificar qual desses tipos de dados está armazenado em uma variável.

## Uso Prático

O `typeof` é frequentemente utilizado em estruturas condicionais, como `if` statements, para tomar decisões com base no tipo de dado de uma variável.

```javascript
var valor = "42";
if (typeof valor === "number") {
  console.log("É um número.");
} else if (typeof valor === "string") {
  console.log("É uma string.");
}
```

Neste exemplo, o código verifica se a variável `valor` é do tipo "number" ou "string" e, com base nisso, imprime mensagens diferentes.

O operador `typeof` é uma ferramenta importante para lidar com dados dinâmicos em JavaScript e é útil para garantir que seu código funcione de acordo com as expectativas, especialmente quando você está lidando com variáveis cujo tipo pode variar.
