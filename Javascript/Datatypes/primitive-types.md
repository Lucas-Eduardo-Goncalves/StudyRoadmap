# Tipos de dados primitivos

O tipo de dados refere-se ao tipo de dados que uma variável Javascript pode conter. Existem sete tipos de dados primitivos em JavaScript (`Number`, `BigInt`, `String`, `Boolean`, `Null`, `Undefined` e `Symbol`). Objetos **não** são primitivos.

## String

O tipo `string` representa sequências de caracteres, como texto. Você pode criar strings usando aspas simples, duplas ou crazes. Exemplo: `"Isso é uma string"`.

## Number

O tipo `number` é usado para representar números, tanto inteiros como de ponto flutuante. Exemplo: `42` ou `3.14`.

## BigInt

O tipo `bigint` é usado para representar números inteiros arbitrariamente grandes. Ele é útil quando você precisa de números maiores do que o limite que o tipo `number` pode acomodar. Exemplo: `1234567890123456789012345678901234567890n`.

## Boolean

O tipo `boolean` possui apenas dois valores possíveis: `true` ou `false`. É usado para representar valores lógicos ou condições.

## Undefined

O valor `undefined` é atribuído a uma variável que foi declarada, mas ainda não foi inicializada com um valor. Também é o valor retornado por uma função que não possui uma instrução `return`.

## Null

O valor `null` é usado para representar a ausência intencional de qualquer valor ou objeto. É um valor atribuído explicitamente para indicar a ausência de valor.

### A diferença entre `undefined` e `null`:

- `undefined` é o valor padrão atribuído a uma variável quando ela é declarada, mas ainda não recebeu um valor. Isso pode acontecer quando a variável é declarada sem atribuição ou quando uma função não retorna um valor.

- `null` é um valor que pode ser atribuído a uma variável para indicar que ela não possui valor ou objeto associado. É usado para indicar a ausência de valor de forma intencional. Em outras palavras, `null` é uma atribuição explícita, enquanto `undefined` é uma falta de atribuição.

## Symbol

O tipo `symbol` é um tipo de dado primitivo que representa um valor único e imutável. Símbolos são principalmente usados para criar propriedades privadas em objetos, evitar colisões de nomeação e fornecer mecanismos de extensibilidade em bibliotecas e frameworks. Eles são uma adição útil à linguagem JavaScript para tornar o código mais seguro e modular.

**Criação de Símbolos:** Você pode criar símbolos usando a função Symbol() e opcionalmente passar uma descrição (uma string) que é usada apenas para fins de depuração e não afeta a unicidade do símbolo.

```js
const symbol1 = Symbol();
const symbol2 = Symbol("Descrição do Símbolo");
```

**Unicidade:** Cada chamada para `Symbol()` ou `Symbol("descrição")` cria um símbolo único, mesmo que a descrição seja a mesma.

```js
const symbol1 = Symbol("chave");
const symbol2 = Symbol("chave");
console.log(symbol1 === symbol2); // false
```

**Uso como Chaves de Propriedades de Objeto:** Os símbolos são frequentemente usados como chaves de propriedades de objetos para criar propriedades privadas ou evitar colisões de nomeação.

```js
const mySymbol = Symbol("mySymbol");
const obj = {};

obj[mySymbol] = "Valor associado ao símbolo";

console.log(obj[mySymbol]); // Valor associado ao símbolo
```

**Símbolos Globais:** O JavaScript também fornece alguns símbolos globais, como
`Symbol.iterator`, que é usado em iterações com laços for...of.

```js
const arr = [1, 2, 3];
const it = arr[Symbol.iterator]();

for (const num of it) {
  console.log(num);
}
```

**Símbolos Predefinidos:** Além do `Symbol.iterator`, o Javascript possui símbolos predefinidos, como `Symbol.for()` e `Symbol.keyFor()`, que permitem criar símbolos compartilhados entre diferentes partes do código.

```js
// Criando um símbolo compartilhado globalmente
const sharedSymbol = Symbol.for("shared");

// Recuperando o símbolo compartilhado
const retrievedSymbol = Symbol.for("shared");

console.log(sharedSymbol === retrievedSymbol); // true
```
