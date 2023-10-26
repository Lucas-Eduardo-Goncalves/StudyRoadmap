# Declaração "while"

A declaração "while" é uma estrutura de controle de loop em muitas linguagens de programação, incluindo Javascript. Ela é usada para criar um loop que executa uma instrução especificada enquanto uma condição de teste é avaliada como verdadeira. A característica distintiva do "while" é que a condição é avaliada antes da execução da instrução, o que significa que, se a condição for inicialmente falsa, a instrução dentro do loop nunca será executada. Vou explicar em detalhes como a declaração "while" funciona.

## Anatomia da Declaração "while"

A declaração "while" possui a seguinte estrutura:

```js
while (condição) {
  // Bloco de código a ser executado
}
```

Aqui estão os detalhes de cada parte:

1. **Condição:** A condição é uma expressão booleana que é avaliada antes da execução do bloco de código. Se a condição for verdadeira, o bloco de código dentro do loop é executado. Se for falsa, o loop é interrompido e o controle passa para a próxima instrução após o bloco de "while".

2. **Bloco de Código a ser Executado:** Este é o bloco de código que será executado se a condição for avaliada como verdadeira. Qualquer lógica ou instruções podem estar contidas neste bloco.

## Funcionamento da Declaração "while"

O "while" funciona da seguinte maneira:

1. A condição é avaliada. Se a condição for falsa desde o início, o bloco de código dentro do "while" nunca será executado.

2. Se a condição for verdadeira, o bloco de código dentro do "while" é executado.

3. Após a execução do bloco de código, a condição é avaliada novamente.

4. Se a condição ainda for verdadeira, o bloco de código é executado novamente, e o processo se repete.

5. O loop continua até que a condição seja avaliada como falsa.

## Exemplo de Uso da Declaração "while" em Javascript

Aqui está um exemplo prático em JavaScript que usa a declaração "while" para contar de 1 a 5 e imprimir os números no console:

```javascript
let contador = 1;

while (contador <= 5) {
  console.log(contador);
  contador++;
}
```

Neste exemplo:

- O contador é inicializado com o valor 1.

- A condição `contador <= 5` é avaliada antes da execução do bloco de código. Se for verdadeira, o bloco de código dentro do "while" é executado.

- O bloco de código imprime o valor do contador e, em seguida, incrementa o contador.

- Após a execução do bloco de código, a condição é avaliada novamente.

- O loop continua até que a condição `contador <= 5` seja falsa.

Isso resultará na impressão dos números de 1 a 5 no console:

```
1
2
3
4
5
```

O loop "while" é usado quando você deseja executar um bloco de código enquanto uma condição específica for verdadeira. É útil quando você não sabe previamente quantas vezes o bloco de código será executado, e a execução depende da avaliação da condição. Certifique-se de que a condição seja avaliada como falsa em algum ponto para evitar loops infinitos.
