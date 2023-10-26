# Declarações rotuladas

As Declarações rotuladas (Labeled Statements) em Javascript são usadas para associar um rótulo
(label) a um identificador, o qual é seguido por dois pontos (:). Esses rótulos são aplicados a
um bloco de código e podem ser usados em conjunto com as instruções `break` e `continue` para
controlar o fluxo de forma mais precisa. Aqui está uma explicação detalhada sobre como as
declarações rotuladas funcionam:

## Sintaxe Básica

A sintaxe básica de uma declaração rotulada é a seguinte:

```javascript
rotulo: {
  // Código associado ao rótulo
}
```

- `rotulo`: Um identificador seguido por dois pontos, que nomeia o rótulo.
- `{}`: Um bloco de código que contém o código associado ao rótulo.

## Uso de Rótulos

Os rótulos são geralmente usados em loops `for`, mas também podem ser usados em qualquer bloco de código, como estruturas condicionais e funções. Eles são usados para nomear um bloco de código específico, permitindo que você se refira a esse bloco posteriormente com as instruções `break` e `continue`.

```javascript
outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop; // Sai do loop externo (etiquetado como "outerLoop")
    }
    console.log(i, j);
  }
}
```

Neste exemplo, temos dois rótulos, "outerLoop" e "innerLoop", que são usados para nomear os loops. Quando a condição `i === 1 && j === 1` é atendida, a instrução `break` é usada com o rótulo "outerLoop" para sair do loop externo.

## Uso do `break` com Rótulos

O `break` pode ser usado com rótulos para controlar o fluxo em loops aninhados. Quando você utiliza `break` com um rótulo, ele sai do bloco de código associado a esse rótulo.

```javascript
outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      break outerLoop; // Sai do loop externo (etiquetado como "outerLoop")
    }
    console.log(i, j);
  }
}
```

Neste exemplo, o `break outerLoop` faz com que o fluxo de execução saia do loop externo, encerrando o processo de iteração.

## Uso do `continue` com Rótulos

O `continue` também pode ser usado com rótulos para pular uma iteração específica em loops aninhados. Quando você utiliza `continue` com um rótulo, ele faz com que o controle de fluxo continue com a próxima iteração do bloco associado a esse rótulo.

```javascript
outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      continue outerLoop; // Pula para a próxima iteração do loop externo (etiquetado como "outerLoop")
    }
    console.log(i, j);
  }
}
```

Neste exemplo, o `continue outerLoop` faz com que o controle de fluxo pule para a próxima iteração do loop externo após a condição ser atendida.

## Uso Avançado

Declarações rotuladas são úteis em situações em que você precisa controlar fluxos complexos em loops aninhados ou em estruturas de controle condicional aninhadas. Elas permitem um maior controle sobre quais loops ou blocos de código são afetados pelo `break` e `continue`.

Tenha em mente que o uso excessivo de rótulos e instruções rotuladas pode tornar o código mais complexo e difícil de ler, então é recomendável usá-los com moderação, especialmente em casos simples onde loops não estão aninhados.
