# Adicione dois números

Você recebe duas listas vinculadas não vazias que representam dois números inteiros não negativos. Os dígitos são armazenados em ordem inversa e cada um de seus nós contém um único dígito. Adicione os dois números e retorne a soma como uma lista vinculada.

Você pode assumir que os dois números não contêm nenhum zero à esquerda,
exceto o próprio número 0.

## Exemplo 1:

```
Entrada: l1 = [2,4,3], l2 = [5,6,4]
Saída: [7,0,8]
Explicação: 342 + 465 = 807.
```

## Exemplo 2:

```
Entrada: l1 = [0], l2 = [0]
Saída: [0]
```

## Exemplo 3:

```
Entrada: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Saída: [8,9,9,9,0,0,0,1]
```

## Restrições:

```
O número de nós em cada lista vinculada está no intervalo [1, 100].
0 <= Nó
.val <= 9
É garantido que a lista representa um número que não possui zeros à esquerda.
```
