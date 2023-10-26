# For of

A instrução `for...of` em Javascript é utilizada para criar um loop que itera sobre uma sequência de valores obtidos a partir de um objeto iterável. Este loop é particularmente útil para percorrer coleções de dados, como arrays, strings, objetos Map, objetos Set, NodeList (e outras coleções do DOM), o objeto `arguments`, geradores criados por funções geradoras e objetos iteráveis definidos pelo usuário.

## Sintaxe Básica

A sintaxe básica de uma instrução `for...of` é a seguinte:

```javascript
for (variável of iterável) {
  // Código a ser executado para cada elemento do iterável
}
```

- `variável`: Uma variável que receberá cada elemento da sequência a cada iteração.
- `iterável`: O objeto iterável que você deseja percorrer.

## Como Funciona

Quando você usa a instrução `for...of`, o Javascript itera sobre cada elemento do objeto iterável especificado, atribuindo o valor de cada elemento à variável especificada na declaração. O loop continuará até que todos os elementos do iterável tenham sido processados.

```js
let frutas = ["maçã", "banana", "laranja"];

for (let fruta of frutas) {
  console.log(fruta); // Isso imprimirá "maçã", "banana" e "laranja"
}
```

Neste exemplo, o loop `for...of` itera sobre cada elemento do array `frutas` e imprime os valores.

## Iteráveis Incorporados

O `for...of` funciona com uma variedade de objetos iteráveis incorporados, como:

- Arrays
- Strings
- Objetos Map
- Objetos Set
- NodeList (e outras coleções do DOM)
- O objeto `arguments`
- Geradores criados por funções geradoras
- Objetos iteráveis definidos pelo usuário

Por exemplo, você pode usar o `for...of` para percorrer as chaves e valores de um objeto Map ou os elementos de um objeto Set.

## Iteráveis Personalizados

Além de objetos iteráveis incorporados, você pode criar seus próprios objetos iteráveis personalizados definindo um método especial chamado `Symbol.iterator`. Isso permite que você crie objetos que possam ser percorridos com o `for...of`.

```javascript
let meuIteravel = {
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
  },
};

for (let valor of meuIteravel) {
  console.log(valor); // Isso imprimirá 1, 2 e 3
}
```

Neste exemplo, `meuIteravel` é um objeto com um método `Symbol.iterator` que retorna um gerador.

## Limitações

O `for...of` não itera sobre as chaves das propriedades de um objeto regular. Para iterar sobre as propriedades de um objeto, você pode usar `for...in`. Além disso, o `for...of` não funciona com objetos comuns, a menos que você implemente um iterador personalizado.
