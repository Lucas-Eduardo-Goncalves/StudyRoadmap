# Declaração de lançamento

O comando `throw` é uma estrutura em linguagens de programação que permite lançar uma exceção definida pelo usuário durante a execução de um programa. Quando uma exceção é lançada com o comando `throw`, a execução da função atual é interrompida imediatamente, o que significa que qualquer código que venha após o comando `throw` não será executado.

O controle do programa é então transferido para o primeiro bloco `catch` na pilha de chamadas de funções. Um bloco `catch` é uma estrutura usada para lidar com exceções específicas em um código. Ele captura a exceção lançada e executa um bloco de código associado a ele para lidar com a situação excepcional. Se não houver nenhum bloco `catch` entre as funções chamadoras, isso significa que nenhuma parte do código tratou a exceção e o programa será encerrado.

Aqui está um exemplo de código em JavaScript demonstrando como o comando `throw` funciona:

```javascript
function divide(a, b) {
  if (b === 0) {
    throw "Erro: divisão por zero";
  }
  return a / b;
}

function calcularResultado(x, y) {
  try {
    var resultado = divide(x, y);
    console.log("O resultado da divisão é: " + resultado);
  } catch (excecao) {
    console.error("Ocorreu um erro: " + excecao);
  }
}

calcularResultado(10, 2); // Saída: O resultado da divisão é: 5
calcularResultado(10, 0); // Saída: Ocorreu um erro: Erro: divisão por zero
```

Neste exemplo, a função `divide` verifica se o divisor `b` é zero. Se for zero, uma exceção é lançada com a mensagem "Erro: divisão por zero". Quando a função `calcularResultado` é chamada, ela envolve a chamada da função `divide` em um bloco `try-catch`. Se a exceção for lançada dentro da função `divide`, o bloco `catch` dentro de `calcularResultado` irá capturá-la e exibir uma mensagem de erro apropriada.

Se não houver um bloco `catch` para lidar com a exceção, o programa será encerrado e um erro será relatado. Isso é útil para detectar e lidar com erros que podem ocorrer durante a execução do programa, garantindo uma execução mais controlada e segura.
