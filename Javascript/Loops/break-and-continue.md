# Parar e Continuar

As instruções `break` e `continue` são utilizadas em linguagens de programação, incluindo Javascript, para controlar o fluxo de execução em loops (como `for`, `while`, `do...while`) e em estruturas de controle condicional (como `switch`). Vou explicar em detalhes o que cada uma delas faz:

## `break` Statement:

A instrução `break` é usada para encerrar imediatamente a execução de um loop (como `for`, `while`, ou `do...while`) ou uma estrutura de controle condicional (como `switch`). É frequentemente usada quando uma determinada condição é atendida, e você deseja sair do loop ou evitar a execução de partes de um `switch`. Aqui estão os detalhes:

**Uso em Loops**: Quando usada em um loop, como um `for`, a instrução `break` faz com que o loop termine prematuramente, mesmo que a condição de continuação ainda seja verdadeira. O controle é transferido para a próxima instrução após o loop.

```js
for (let i = 1; i <= 5; i++) {
  if (i === 3) break; // Encerra o loop quando i for igual a 3
  console.log(i);
}
```

Neste exemplo, o loop é encerrado quando `i` é igual a 3, e a execução continua na próxima instrução após o loop.

## `continue` Statement:

A instrução `continue` é usada para pular a iteração atual de um loop e continuar com a próxima iteração. É frequentemente usado quando uma determinada condição é atendida, e você deseja ignorar o restante do código na iteração atual e avançar para a próxima. Aqui estão os detalhes:

**Uso em Loops**: Quando usada em um loop, como um `for`, a instrução `continue` faz com que o código dentro do loop seja interrompido na iteração atual e pule para a próxima iteração.

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; // Pula a iteração quando i for igual a 3
  }
  console.log(i);
}
```

Neste exemplo, quando `i` é igual a 3, a instrução `continue` faz com que a execução do loop pule para a próxima iteração, evitando a impressão de 3.

**Uso em Estruturas Condicionais**: A instrução `continue` também pode ser usada em loops aninhados para pular a iteração atual do loop interno e avançar para a próxima iteração do loop externo.

```js
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    if (i === 2 && j === 2) {
      continue; // Pula a iteração do loop interno quando i for igual a 2 e j for igual a 2
    }
    console.log(i, j);
  }
}
```

Neste exemplo, quando `i` é igual a 2 e `j` é igual a 2, a instrução `continue` faz com que a execução do loop interno pule para a próxima iteração, evitando a impressão de "2 2".

Em resumo, o `break` é usado para sair completamente de um loop ou de uma estrutura `switch`, enquanto o `continue` é usado para pular uma iteração de um loop e avançar para a próxima. Ambas as instruções são úteis para controlar o fluxo de execução e adicionar lógica condicional aos seus loops e estruturas condicionais em Javascript.
