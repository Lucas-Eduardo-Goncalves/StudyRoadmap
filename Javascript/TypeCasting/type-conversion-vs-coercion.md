# Conversão/coerção de tipo

A conversão de tipo, também conhecida como coerção de tipo, refere-se à conversão automática ou implícita de valores de um tipo de dado para outro. Isso ocorre quando uma linguagem de programação ajusta os tipos de dados para permitir operações ou comparações, mesmo quando os tipos não são estritamente compatíveis. A coerção de tipo é uma parte importante de linguagens de programação de tipagem fraca ou dinâmica, como Javascript, Python e PHP.

Vamos explorar mais a fundo o conceito de conversão de tipo e coerção de tipo:

## Conversão de Tipo Implícita (Coerção de Tipo)

Isso acontece automaticamente, sem intervenção explícita do programador. Quando uma operação é realizada entre valores de tipos diferentes, a linguagem tenta ajustar automaticamente os tipos para que a operação possa ser executada. Isso é chamado de coerção de tipo.

```js
let numero = 5; // Isso é um número inteiro
let texto = "10"; // Isso é uma string

let resultado = numero + texto; // Javascript realiza coerção de tipo aqui

console.log(resultado); // O resultado é "510", uma string
```

No exemplo acima, a coerção de tipo ocorre quando o Javascript converte automaticamente o número em uma string e depois concatena as duas strings.

## Conversão de Tipo Explícita

A conversão de tipo explícita ocorre quando o programador especificamente solicita a conversão de um valor de um tipo para outro. Isso é feito usando funções ou operadores de conversão explícita, como `parseInt()` ou `parseFloat()` em JavaScript.

```js
let numeroString = "42";
let numeroInteiro = parseInt(numeroString); // Conversão explícita de string para inteiro

console.log(numeroInteiro); // O resultado é 42, um número inteiro
```

Neste caso, a conversão de tipo é explicitamente solicitada pelo uso da função `parseInt()`.

## Resumindo

- A conversão de tipo é o processo de alterar o tipo de dados de um valor de um tipo para outro, seja de forma automática (coerção de tipo) ou por solicitação do programador (conversão explícita).
- A coerção de tipo é um subconjunto da conversão de tipo e se refere à conversão automática realizada pela linguagem de programação quando valores de tipos diferentes são usados em operações ou comparações.
- A conversão de tipo explícita é aquela em que o programador especificamente pede para converter um valor de um tipo para outro, usando funções ou operadores de conversão.
