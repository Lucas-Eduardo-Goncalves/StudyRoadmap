# Prototypes

São um conceito fundamental no JavaScript e fazem parte do modelo de programação orientada a objetos (OOP) da linguagem. Para entender os protótipos no JavaScript, é importante compreender os seguintes pontos:

## Herança Baseada em Protótipo

Diferentemente de outras linguagens de programação orientada a objetos, como Java ou C++, que utilizam uma herança baseada em classes, o JavaScript utiliza a herança baseada em protótipos. Em JavaScript, os objetos herdam propriedades e métodos de outros objetos, chamados protótipos.

## Objetos e Protótipos

Em JavaScript, cada objeto tem um protótipo, que é um outro objeto. Quando você tenta acessar uma propriedade ou método em um objeto, o motor do JavaScript verifica se essa propriedade ou método está presente no objeto em si. Se não estiver, ele procurará no protótipo desse objeto. Esse processo de busca é recursivo até encontrar a propriedade desejada ou chegar ao objeto `Object.prototype`, que é o protótipo mais alto na cadeia de protótipos.

## Objetos Literais e Protótipos

Quando você cria um objeto literal em JavaScript (por exemplo, `const meuObjeto = { chave: valor }`), esse objeto é automaticamente criado com um protótipo, que é o `Object.prototype`. Isso significa que, por padrão, todos os objetos literais herdam propriedades e métodos de `Object.prototype`.

## Construtores e Protótipos Personalizados

Você pode criar protótipos personalizados definindo funções construtoras e associando métodos e propriedades a elas. Quando você cria objetos a partir dessas funções construtoras usando a palavra-chave `new`, os objetos herdam as propriedades e métodos definidos no protótipo da função construtora.

Aqui está um exemplo simples de como criar e usar protótipos personalizados em JavaScript:

```js
// Função construtora
function Pessoa(nome) {
  this.nome = nome;
}

// Adicionando um método ao protótipo
Pessoa.prototype.dizerOla = function () {
  console.log(`Olá, meu nome é ${this.nome}`);
};

// Criando objetos usando a função construtora
const pessoa1 = new Pessoa("Alice");
const pessoa2 = new Pessoa("Bob");

pessoa1.dizerOla(); // Saída: Olá, meu nome é Alice
pessoa2.dizerOla(); // Saída: Olá, meu nome é Bob
```

Neste exemplo, a função `Pessoa` serve como um construtor para criar objetos. O método `dizerOla` é adicionado ao protótipo da função `Pessoa`, o que significa que todos os objetos criados a partir dessa função terão acesso a esse método.

Os protótipos desempenham um papel crucial na herança e na criação de estruturas de objetos mais complexas em JavaScript. Eles são uma parte central da programação orientada a objetos na linguagem e são essenciais para compreender o funcionamento de muitas bibliotecas e frameworks JavaScript.
