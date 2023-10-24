# Objeto

É uma estrutura de dados fundamental que permite armazenar e organizar dados na forma de pares chave-valor. Cada "chave" é um identificador único associado a um valor específico. Esses valores podem ser de qualquer tipo de dado em Javascript, como números, strings, funções, outros objetos e muito mais. Esse conceito é semelhante aos objetos do mundo real, onde cada objeto tem várias propriedades que definem suas características.

Aqui estão os principais pontos sobre objetos em JavaScript:

## Pares Chave-Valor

Objetos em Javascript são coleções de pares chave-valor. Uma "chave" é uma string (ou símbolo em versões mais recentes do Javascript) que atua como um identificador, e um "valor" pode ser de qualquer tipo de dado em Javascript.

Por exemplo, se você tem um objeto representando um carro, as chaves podem ser "marca", "modelo", "ano" e os valores correspondentes podem ser "Toyota", "Camry" e "2022".

## Propriedades

As chaves em objetos Javascript são frequentemente chamadas de "propriedades". Cada propriedade define uma característica ou atributo do objeto.

Na analogia fornecida, as propriedades de um objeto do mundo real, como uma caneta, poderiam incluir "cor", "design" e "material".

## Criando Objetos em JavaScript

Você pode criar objetos em JavaScript usando literais de objeto, que é uma maneira direta de definir um objeto e suas propriedades.

```js
var caneta = {
  cor: "azul",
  design: "esferográfica",
  material: "plástico",
};
```

## Acessando Propriedades

Você pode acessar as propriedades de um objeto usando a notação de ponto ou colchetes.

```js
console.log(caneta.cor); // Saída: "azul"
console.log(caneta["material"]); // Saída: "plástico"
```

## Personalização

Você pode adicionar, modificar ou remover propriedades de um objeto, tornando-o flexível e adaptável às necessidades do seu programa.

```js
caneta.preco = 2.5; // Adicionando uma nova propriedade
caneta.cor = "vermelha"; // Modificando uma propriedade existente
delete caneta.design; // Removendo uma propriedade
```

Assim, os objetos em JavaScript são essenciais para representar dados complexos e organizar informações em seu programa, permitindo que você modele objetos do mundo real e suas características de forma eficaz.
