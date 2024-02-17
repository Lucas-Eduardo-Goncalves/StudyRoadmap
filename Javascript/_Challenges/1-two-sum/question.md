# Duas Somas

Dada uma matriz de números inteiros e um alvo inteiro, retorne os índices dos dois números de forma que eles somem ao alvo.

Você pode assumir que cada entrada teria exatamente uma solução e não pode usar o mesmo elemento duas vezes.

Você pode retornar a resposta em qualquer ordem.

## Exemplo 1:

```
Entrada: nums = [2,7,11,15], alvo = 9
Saída: [0,1]
Explicação: Como nums[0] + nums[1] == 9, retornamos [0, 1].
```

## Exemplo 2:

```
Entrada: nums = [3,2,4], alvo = 6
Saída: [1,2]
```

## Exemplo 3:

```
Entrada: nums = [3,3], alvo = 6
Saída: [0,1]
```

## Restrições:

```
2 <= nums.comprimento <= 104
-109 <= num[i] <= 109
-109 <= alvo <= 109
Existe apenas uma resposta válida.
```
