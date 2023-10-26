# Igualdade Estrita (`===`)

A igualdade estrita é um conceito em JavaScript associado ao operador `===`. Quando você usa `===` para comparar dois valores em JavaScript, o mecanismo de JavaScript verifica se os valores são idênticos em valor e tipo. Isso significa que, para que dois valores sejam considerados estritamente iguais, eles devem ter o mesmo valor e o mesmo tipo.

Por exemplo, com igualdade estrita:

```javascript
5 === "5"; // false, pois os tipos são diferentes.
0 === false; // false, pois os tipos são diferentes.
```

Aqui, o `===` não tenta realizar conversões de tipo; ele compara os valores e os tipos diretamente. Se os tipos forem diferentes, a comparação retornará `false`.
