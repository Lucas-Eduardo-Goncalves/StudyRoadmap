# Conversão explícita de tipo

Type casting, ou conversão explícita de tipo, é o processo de transferir dados de um tipo de dado para outro de forma explícita, especificando o tipo para o qual você deseja converter os dados fornecidos. Esse tipo de conversão é normalmente realizado para tornar os dados compatíveis com outras variáveis ou operações que exigem um tipo de dado específico. Em muitas linguagens de programação, existem funções ou métodos dedicados para realizar a conversão explícita de tipos. Alguns exemplos comuns de métodos de type casting incluem `parseInt()`, `parseFloat()`, e `toString()`.

Vamos entender isso com mais detalhes:

# `parseInt()`, `parseFloat()` e `Number()`

Essas funções são comumente usadas em linguagens como Javascript para converter valores de string em números inteiros (com `parseInt()`) ou números de ponto flutuante (com `parseFloat()`) ou para ambos `Number()`. Isso é útil quando você precisa realizar cálculos matemáticos com números que estão armazenados como strings.

```js
let stringNumber = "123";
let number = parseInt(stringNumber); // number agora contém o valor 123 como um número inteiro
```

## `toString()`

Essa função é usada para converter outros tipos de dados em strings. Por exemplo, se você tem um número e deseja representá-lo como uma string, você pode usar `toString()`:

```js
let number = 42;
let stringNumber = number.toString(); // stringNumber agora contém a string "42"
```

## `Boolean(valor)`

Converte um valor em um booleano. O valor resultante será `true` para a maioria dos valores, exceto para valores falsy como `0`, `null`, `undefined`, `false`, `NaN`, e uma string vazia.

## `JSON`

`JSON.parse(jsonString)` - Converte uma string JSON em um objeto Javascript.
`JSON.stringify(objeto)` - Converte um objeto Javascript em uma string JSON.

## `String.fromCharCode(código)`

Converte um código de caractere em um caractere.

Lembrando que essas conversões explícitas são frequentemente usadas para garantir que os dados sejam do tipo correto antes de realizar operações específicas. Certifique-se de usar a conversão adequada de acordo com a situação em seu código Javascript.
