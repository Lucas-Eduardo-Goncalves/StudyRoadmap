# Declaração do "do...while"

A declaração do "do...while" é uma estrutura de controle de loop em muitas linguagens de programação, incluindo Javascript. Ela é usada para criar um loop que executa uma instrução específica até que uma condição de teste seja avaliada como falsa. A característica distintiva do "do...while" em relação a outros tipos de loops é que a condição é avaliada após a execução da instrução, o que garante que a instrução seja executada pelo menos uma vez.

## Anatomia da Declaração "do...while"

A declaração "do...while" possui a seguinte estrutura:

```js
do {
  // Bloco de código a ser executado
} while (condição);
```

Aqui estão os detalhes de cada parte:

1. **Bloco de Código a ser Executado:** Este é o bloco de código que será executado na primeira iteração do loop e, subsequentemente, nas iterações adicionais, desde que a condição seja avaliada como verdadeira. Qualquer lógica ou instruções podem estar contidas neste bloco.

2. **Condição:** A condição é uma expressão booleana que é avaliada após a execução do bloco de código. Se a condição for verdadeira, o loop continuará a ser executado; se for falsa, o loop será encerrado.

## Funcionamento do "do...while"

O "do...while" funciona da seguinte maneira:

1. O bloco de código dentro do "do" é executado.

2. Após a execução do bloco de código, a condição é avaliada.

3. Se a condição for verdadeira, o bloco de código é executado novamente, e o processo se repete.

4. O loop continua até que a condição seja avaliada como falsa.

A característica fundamental do "do...while" é que o bloco de código é executado pelo menos uma vez, independentemente do resultado da condição. Isso é útil quando você deseja garantir que um bloco de código seja executado antes de verificar a condição.

## Exemplo de Uso do "do...while" em Javascript

Aqui está um exemplo prático em Javascript que usa a declaração "do...while" para contar de 1 a 5 e imprimir os números no console:

```javascript
let contador = 1;

do {
  console.log(contador);
  contador++;
} while (contador <= 5);
```

Neste exemplo:

- O contador é inicializado com o valor 1.

- O bloco de código dentro do "do" imprime o valor do contador e, em seguida, incrementa o contador.

- A condição `contador <= 5` é avaliada após a execução do bloco de código. Enquanto o contador for menor ou igual a 5, o loop continuará.

Isso resultará na impressão dos números de 1 a 5 no console:

```
1
2
3
4
5
```

Observe que, mesmo se a condição fosse inicialmente falsa, o bloco de código seria executado pelo menos uma vez, devido à natureza do "do...while". O loop só será encerrado quando a condição for avaliada como falsa após a execução do bloco de código. Isso é útil em situações em que você deseja garantir que um certo código seja executado antes de verificar uma condição.
