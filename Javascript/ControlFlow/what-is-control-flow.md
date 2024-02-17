# O que é o controle de fluxo?

O fluxo de controle (ou "Control Flow") em Javascript se refere à maneira como o computador executa o código de cima para baixo. Ele começa na primeira linha e continua até a última linha, a menos que encontre alguma instrução que altere o fluxo de controle do programa, como loops, condicionais, etc.

Vamos analisar cada uma das estruturas de controle mencionadas:

**Sequencial (modo padrão)**:
Nesse modo, o código é executado linha por linha, de cima para baixo, sem desvios. Cada linha de código é executada após a anterior, seguindo a ordem definida no programa.

```javascript
// Sequencial
let a = 5;
let b = 10;
let c = a + b;
console.log(c); // Output: 15
```

**Declarações Condicionais**:
As declarações condicionais, como `if`, `else if` e `else`, permitem que o programa tome decisões com base em condições específicas. Dependendo do resultado dessas condições, o fluxo de controle pode ser direcionado para diferentes partes do código.

```javascript
// Condicionais
let hour = 12;
if (hour < 12) {
  console.log("Bom dia!");
} else if (hour < 18) {
  console.log("Boa tarde!");
} else {
  console.log("Boa noite!");
}
```

**Tratamento de Exceções**:
O tratamento de exceções permite lidar com situações excepcionais que podem ocorrer durante a execução do código, como erros. Isso evita que o programa pare de funcionar inesperadamente, permitindo que você tome medidas adequadas quando ocorrem erros.

```javascript
// Tratamento de Exceções
try {
  // Tentar executar um código potencialmente problemático
  let x = y + 10; // y não está definido, o que gerará um erro
} catch (error) {
  // Lidar com o erro
  console.error("Ocorreu um erro:", error.message);
}
```

**Laços e Iterações**:
Os laços (ou loops) permitem executar o mesmo bloco de código repetidamente enquanto
uma condição específica for verdadeira (lembrando que o código não irá dar sequência
enquando o loop não for finalizado). Isso é útil quando você precisa repetir uma
tarefa várias vezes.

```javascript
// Laços e Iterações
for (let i = 0; i < 5; i++) {
  console.log("Número:", i);
}
```

Essas estruturas de controle são fundamentais para controlar o fluxo de execução do seu programa em Javascript, permitindo que você tome decisões, lide com erros e execute código repetidamente conforme necessário.
