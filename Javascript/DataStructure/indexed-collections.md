# Coleções Indexadas

As coleções indexadas são conjuntos de dados que possuem índices numéricos, ou seja, são coleções de dados organizadas por um valor de índice. Em Javascript, um exemplo clássico de uma coleção indexada é o array.

## String

Embora uma string seja uma sequência de caracteres, você pode acessar cada caractere pelo seu índice numérico.

```js
let texto = "Olá, mundo!";
console.log(texto[0]); // Saída: O
console.log(texto[7]); // Saída: m
```

## Argumentos de Função

Os argumentos passados para uma função em JavaScript também são uma coleção indexada.

```js
function somar(a, b) {
  console.log(arguments[0] + arguments[1]);
}

somar(5, 3); // Saída: 8
```

## Nodelist (Coleção de Elementos HTML)

Quando você seleciona elementos HTML usando métodos como `document.querySelectorAll`, os elementos são retornados em uma coleção indexada chamada NodeList.

```js
let paragrafos = document.querySelectorAll("p");
console.log(paragrafos[0].textContent); // Acessa o conteúdo do primeiro parágrafo
```

## TypedArray (por exemplo, Uint8Array)

Em Javascript, você também tem estruturas de dados como TypedArrays, que são coleções indexadas usadas para manipular dados binários.

```javascript
let bytes = new Uint8Array([72, 101, 108, 108, 111]); // Representa "Hello" em códigos ASCII
console.log(String.fromCharCode(bytes[0])); // Saída: H
```
