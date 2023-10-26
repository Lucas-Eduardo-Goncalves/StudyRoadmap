# For in

A declaração `for...in` em Javascript é usada para iterar sobre todas as propriedades enumeráveis de um objeto que são indexadas por strings. Esta declaração percorre tanto as propriedades do próprio objeto quanto as propriedades herdadas do seu protótipo. No entanto, as propriedades que são indexadas por símbolos (Symbols) não são incluídas na iteração.

## Sintaxe Básica

A sintaxe básica de uma instrução `for...in` é a seguinte:

```js
for (variável in objeto) {
  // Código a ser executado para cada propriedade do objeto
}
```

- `variável`: É uma variável que receberá o nome da propriedade em cada iteração.
- `objeto`: É o objeto sobre o qual você deseja iterar.

## Como Funciona

Quando você usa a declaração `for...in`, o Javascript itera por todas as propriedades enumeráveis do objeto especificado. O loop percorre todas as propriedades do objeto, uma de cada vez, atribuindo o nome da propriedade à variável especificada na declaração.

```js
let pessoa = {
  nome: "Alice",
  idade: 30,
};

for (let propriedade in pessoa) {
  console.log(propriedade); // Isso imprimirá "nome" e depois "idade"
}
```

Neste exemplo, o loop `for...in` itera sobre as propriedades "nome" e "idade" do objeto `pessoa`.

## Herança de Propriedades

Importante notar que o `for...in` também itera sobre as propriedades herdadas do protótipo do objeto. Por exemplo:

```javascript
function Animal() {
  this.tipo = "Desconhecido";
}

Animal.prototype.barulho = "Silencioso";

let gato = new Animal();
gato.nome = "Whiskers";

for (let propriedade in gato) {
  console.log(propriedade);
}
```

Neste exemplo, o loop `for...in` irá iterar sobre as propriedades "nome", "tipo" e "barulho". "nome" pertence ao objeto `gato`, enquanto "tipo" e "barulho" são herdadas do protótipo `Animal`.

## Exclusão de Propriedades

Você pode usar a instrução `delete` para remover uma propriedade de um objeto. Por exemplo:

```js
delete pessoa.idade;
```

Isso removerá a propriedade "idade" do objeto `pessoa`, e ela não será mais iterada pelo `for...in`.

## Evitar Símbolos

Como mencionado na descrição inicial, o `for...in` não itera sobre propriedades indexadas por símbolos (Symbols). Propriedades com chaves de símbolo não são enumeráveis por padrão. Para iterar sobre propriedades de símbolos, você pode usar `Object.getOwnPropertySymbols()`.

Em resumo, o `for...in` é uma maneira de percorrer todas as propriedades enumeráveis de um objeto, incluindo as herdadas do seu protótipo, mas excluindo propriedades indexadas por símbolos. Tenha cuidado ao usá-lo, pois ele pode iterar por mais propriedades do que você espera, especialmente se o objeto tiver um protótipo com propriedades enumeráveis. É importante também considerar alternativas, como `for...of` para iterar sobre arrays e objetos iteráveis, ou `Object.keys()`, `Object.values()`, e `Object.entries()` para obter propriedades específicas de um objeto.
