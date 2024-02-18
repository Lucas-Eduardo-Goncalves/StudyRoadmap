# Utilizando objetos de erro

Quando um erro de tempo de execução ocorre em JavaScript, um novo objeto Error é
criado e lançado. Esse objeto Error contém informações sobre o erro, como uma mensagem
descritiva e uma pilha de chamadas, que podem ser úteis para diagnosticar e lidar com
o erro.

Existem vários tipos de erros em JavaScript, e cada tipo de erro corresponde a um
construtor de erro específico. Alguns dos construtores de erro principais incluem:

**AggregateError:** Um erro que representa várias falhas em uma operação
assíncrona. Pode conter vários erros como sua propriedade "erros".

**EvalError:** Um erro que ocorre quando uma função eval() é utilizada de forma
inadequada.

**InternalError:** Um erro que ocorre quando um erro interno do JavaScript é
encontrado no mecanismo de execução, que normalmente não deve acontecer em código
JavaScript comum.

**RangeError:** Um erro que ocorre quando um valor numérico está fora do intervalo
permitido.

**ReferenceError:** Um erro que ocorre quando uma referência a uma variável
indefinida é feita.

**SyntaxError:** Um erro que ocorre quando o código JavaScript possui uma sintaxe
inválida.

**TypeError:** Um erro que ocorre quando uma operação não pode ser realizada devido
ao tipo incorreto de uma variável.

Ao lidar com erros, é importante identificar o tipo de erro para que você possa
tratá-lo de maneira apropriada. Você pode fazer isso utilizando a instrução
`instanceof` para verificar se o objeto de erro é uma instância de um tipo específico
de erro. Em seguida, você pode lidar com o erro de acordo com o seu tipo, como
mostrado no exemplo fornecido:

```javascript
try {
  willGiveErrorSometime();
} catch (error) {
  if (error instanceof RangeError) {
    rangeErrorHandler(error);
  } else if (error instanceof ReferenceError) {
    referenceErrorHandle(error);
  } else {
    errorHandler(error);
  }
}
```

Neste exemplo, a função `willGiveErrorSometime()` é chamada dentro de um bloco
`try-catch`. Se ocorrer um erro dentro dessa função e for lançado um objeto Error, o
código dentro do bloco `catch` será executado. Dentro do bloco `catch`, o tipo de erro
é verificado usando a instrução `instanceof`, e o erro é tratado de acordo com o seu
tipo, chamando a função de manipulação apropriada (`rangeErrorHandler`,
`referenceErrorHandle`, ou `errorHandler`). Isso permite que o código lide com
diferentes tipos de erros de forma personalizada e adequada.
