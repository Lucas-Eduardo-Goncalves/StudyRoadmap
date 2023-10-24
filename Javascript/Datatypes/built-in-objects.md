# Objetos integrados

Também conhecidos como "objetos globais" ou "built-in objects" em inglês, são objetos que fazem parte da própria especificação da linguagem Javascript. Eles estão sempre disponíveis em qualquer ambiente Javascript, o que significa que você pode acessá-los em qualquer lugar do seu código sem a necessidade de importações ou declarações especiais. Esses objetos fornecem funcionalidades fundamentais para o desenvolvimento em Javascript. Aqui estão alguns exemplos de objetos integrados:

## Number (Número)

O objeto `Number` é usado para realizar operações numéricas e converter valores em números. Ele fornece métodos para formatar números, bem como verificações de limite.

```js
var numero = 42;
var numeroEmTexto = Number("123");
```

## Math (Matemática)

O objeto `Math` contém várias funções matemáticas úteis, como `Math.random()` para gerar números aleatórios, `Math.round()` para arredondar números e muitos outros métodos matemáticos.

```js
var numeroAleatorio = Math.random();
var numeroArredondado = Math.round(5.7);
```

## Date (Data)

O objeto `Date` é usado para trabalhar com datas e horas. Ele permite criar, manipular e formatar datas e horas.

```js
var dataAtual = new Date();
var dataDeNascimento = new Date("1990-01-01");
```

## String (String)

O objeto `String` é usado para manipular texto e strings. Ele fornece métodos para encontrar, substituir e formatar strings.

```js
var texto = "Isso é uma string.";
var tamanho = texto.length;
```

## Error (Erro)

O objeto `Error` é usado para representar erros em Javascript. Ele é frequentemente usado para criar exceções personalizadas e rastrear problemas em seu código.

```js
throw new Error("Isso é um erro personalizado.");
```

## Function (Função)

O objeto `Function` é usado para criar funções em Javascript. Funções são blocos de código reutilizáveis que podem ser chamados em qualquer lugar do seu programa.

```js
function somar(a, b) {
  return a + b;
}
```

## Boolean (Booleano)

O objeto `Boolean` é usado para representar valores booleanos, ou seja, `true` (verdadeiro) ou `false` (falso). Ele é usado em operações lógicas.

```js
var verdadeiro = new Boolean(true);
var falso = new Boolean(false);
```

Esses objetos integrados são parte fundamental do JavaScript e são amplamente utilizados no desenvolvimento de aplicativos e páginas da web. Eles fornecem funcionalidades essenciais para realizar operações matemáticas, trabalhar com datas, manipular strings, gerar exceções e muito mais. Eles estão disponíveis globalmente em qualquer script JavaScript que você escrever.

## Principais objetos integrados do Javascript

Javascript possui vários objetos integrados que são parte da linguagem e estão sempre disponíveis em qualquer ambiente Javascript. Aqui está uma lista de alguns dos principais objetos integrados:

**Object**: O objeto base de todos os objetos em JavaScript.
**Function**: Usado para criar funções em JavaScript.
**Array**: Usado para armazenar e manipular listas de dados.
**String**: Usado para trabalhar com texto e strings.
**Number**: Usado para realizar operações matemáticas e converter valores em números.
**Boolean**: Representa os valores booleanos `true` (verdadeiro) e `false` (falso).
**Date**: Usado para trabalhar com datas e horas.
**Math**: Contém funções matemáticas e constantes.
**RegExp**: Usado para trabalhar com expressões regulares.
**Error**: Usado para representar erros em JavaScript.
**Symbol**: Introduzido em versões mais recentes do JavaScript, é usado para criar valores únicos e imutáveis.
**Map**: Uma estrutura de dados que permite mapear chaves a valores.
**Set**: Uma estrutura de dados que representa uma coleção de valores únicos.
**Promise**: Usado para trabalhar com operações assíncronas e eventos.
**JSON**: Usado para trabalhar com notação JSON (JavaScript Object Notation) para serialização de dados.
**Intl**: Contém funcionalidades para internacionalização e localização.
**Reflect**: Fornece métodos para interagir com objetos.
**Proxy**: Permite a criação de objetos proxy que interceptam operações em objetos alvo.
**ArrayBuffer**: Usado para trabalhar com dados binários em memória.
**DataView**: Usado em conjunto com ArrayBuffer para leitura e gravação de dados binários.

Esses são alguns dos principais objetos integrados em JavaScript. A linguagem JavaScript continua a evoluir, e novos objetos e funcionalidades são adicionados em versões mais recentes. Cada um desses objetos possui métodos e propriedades que oferecem funcionalidades específicas e são essenciais para o desenvolvimento de aplicativos e scripts em JavaScript.
