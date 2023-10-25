# Coleções com Chave

As coleções com chave são tipos de coleções de dados que são organizadas com base em uma chave, em vez de um índice numérico. Elas têm uma natureza associativa, o que significa que os dados são associados a chaves específicas. Objetos de mapa (Map) e conjuntos (Set) são exemplos de coleções com chave e podem ser iterados na ordem em que os elementos foram inseridos.

Para entender isso melhor, vamos desmembrar o conceito:

## Coleções com Chave

Isso se refere a coleções de dados que não organizam seus elementos com base em números de índice, como acontece em arrays ou listas. Em vez disso, eles usam uma chave (uma espécie de identificação única) para acessar e organizar os dados.

## Associativas

A natureza associativa significa que cada elemento na coleção é associado a uma chave. Isso permite recuperar rapidamente um elemento específico, sabendo a chave correspondente, em vez de ter que percorrer todos os elementos da coleção.

## Objetos (`Map`)

Um "Map" é um tipo de coleção com chave em que os dados são organizados como pares chave-valor. Isso significa que você pode associar um valor a uma chave específica e, em seguida, recuperar esse valor posteriormente, desde que você saiba a chave. Não importa a ordem em que os elementos foram inseridos, pois você acessa os elementos por suas chaves.

## Conjuntos (`Set`)

Os conjuntos são outro tipo de coleção com chave, mas diferentemente dos mapas, eles apenas armazenam chaves, sem valores associados. Um conjunto garante que todas as chaves sejam únicas, o que é útil quando você deseja manter uma lista de itens únicos.

## Iteração na Ordem de Inserção

Quando você itera (percorre) uma coleção com chave, como um mapa ou um conjunto, os elementos são acessados na ordem em que foram inseridos. Isso pode ser útil em casos em que a ordem dos elementos é importante.
