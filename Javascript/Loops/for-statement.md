# O Loop (`for`)

O loop "for" é uma construção de controle de fluxo padrão em muitas linguagens de programação, incluindo JavaScript. Ele é amplamente utilizado para iterar sobre sequências de dados ou para executar um bloco de código um número conhecido de vezes, uma vez para cada iteração.

## Anatomia de um Loop (`for`)

Um loop "for" consiste em três partes principais:

1. **Inicialização**: A parte inicial é onde você inicializa uma variável de controle que será usada para acompanhar o progresso do loop. Isso geralmente é feito com a declaração de uma variável e a atribuição de um valor inicial.

2. **Condição**: A condição é uma expressão que é avaliada antes de cada iteração do loop. Enquanto a condição for verdadeira, o loop continuará a ser executado. Se a condição se tornar falsa, o loop é encerrado.

3. **Expressão de Iteração**: Após cada iteração do loop, a expressão de iteração é executada. Geralmente, isso envolve a modificação da variável de controle de alguma forma (por exemplo, incrementando seu valor).

**Estrutura Geral do Loop "for":**

A estrutura geral do loop "for" é a seguinte:

```js
for (inicialização; condição; expressão de iteração) {
  // Código a ser executado em cada iteração
}
```

Aqui estão os detalhes de cada parte:

- **Inicialização**: Isso é onde você declara e inicializa uma variável de controle. É executado uma única vez no início do loop.

- **Condição**: A condição é avaliada antes de cada iteração. Se for verdadeira, o loop continua; se for falsa, o loop é encerrado.

- **Expressão de Iteração**: Após cada iteração do loop, a expressão de iteração é executada. Isso geralmente envolve a modificação da variável de controle.

- **Código a ser Executado em Cada Iteração**: Este é o bloco de código que será executado em cada iteração do loop. Pode conter qualquer lógica que você deseja aplicar repetidamente.

## Exemplo de Uso do Loop "for" em Javascript

Aqui está um exemplo prático de um loop "for" em Javascript que imprime os números de 1 a 5 no console:

```javascript
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

Neste exemplo:

- A inicialização declara a variável `i` e a inicializa com o valor 1.

- A condição verifica se `i` é menor ou igual a 5. Enquanto essa condição for verdadeira, o loop continua.

- A expressão de iteração incrementa `i` em 1 após cada iteração (`i++` é uma forma abreviada de `i = i + 1`).

- O bloco de código dentro do loop (no caso, `console.log(i)`) é executado em cada iteração, imprimindo o valor atual de `i`.

Isso resultará na impressão dos números de 1 a 5 no console:

```
1
2
3
4
5
```
