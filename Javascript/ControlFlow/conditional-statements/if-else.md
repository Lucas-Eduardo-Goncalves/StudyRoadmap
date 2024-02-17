# IF e ELSE

A instrução `if...else` em JavaScript é uma estrutura condicional que permite executar
diferentes blocos de código com base na avaliação de uma condição booleana. A sintaxe
básica é a seguinte:

```javascript
if (condição) {
  // Bloco de código a ser executado se a condição for verdadeira
  statement1;
} else {
  // Bloco de código a ser executado se a condição for falsa
  statement2;
}
```

Aqui está uma explicação detalhada do funcionamento do `if...else`:

**Condição**: A expressão condicional, definida dentro dos parênteses após a palavra-chave `if`, é avaliada como verdadeira ou falsa. Se a condição for avaliada como verdadeira (ou seja, truthy), o bloco de código dentro do primeiro conjunto de chaves (`{}`) é executado. Se a condição for avaliada como falsa (ou seja, falsy), o bloco de código dentro do conjunto de chaves após a palavra-chave `else` é executado.

**Bloco de código 1 (`statement1`)**: Este é o bloco de código que será executado se a condição dentro do `if` for verdadeira. Pode ser uma única instrução ou várias instruções agrupadas entre chaves `{}`.

**Bloco de código 2 (`statement2`)**: Este é o bloco de código que será executado se a condição dentro do `if` for falsa. Novamente, pode ser uma única instrução ou várias instruções agrupadas entre chaves `{}`.

Aqui está um exemplo para ilustrar o uso do `if...else`:

```javascript
let hora = 20;

if (hora < 12) {
  console.log("Bom dia!");
} else {
  console.log("Boa noite!");
}
```

Neste exemplo:

- A condição `hora < 12` é avaliada como `false` porque `hora` é `20`.
- Como a condição é falsa, o bloco de código dentro do `else` é executado.
- Portanto, o output será "Boa noite!".

É importante notar que o bloco `else` é opcional. Se você não precisar executar nenhuma ação quando a condição for falsa, pode omitir o bloco `else` completamente, resultando em um `if` sem um `else`. Por exemplo:

```javascript
if (condição) {
  // Bloco de código a ser executado se a condição for verdadeira
  statement1;
}
```

Em resumo, a instrução `if...else` é uma ferramenta fundamental para controlar o fluxo de execução do seu código Javascript com base na avaliação de condições booleanas. Ela permite que você execute diferentes blocos de código dependendo se uma condição é verdadeira ou falsa.
