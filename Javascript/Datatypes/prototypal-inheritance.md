# Herança prototípica

A Herança prototípica ou "Prototypal Inheritance" em inglês, é um recurso fundamental do Javascript que permite que um objeto herde as propriedades e métodos de outro objeto. Essa é uma das principais maneiras pelas quais o Javascript permite a reutilização de código e a criação de hierarquias de objetos.

## Objetos em Javascript

Em Javascript, quase tudo é um objeto, e os objetos são a base da linguagem. Cada objeto em Javascript possui um link para um objeto "protótipo". O protótipo é essencialmente um objeto de referência que contém propriedades e métodos que podem ser herdados por outros objetos.

## Herança por Protótipo

A herança prototípica permite que um objeto herde propriedades e métodos de outro objeto, seu protótipo. Isso significa que um objeto filho pode acessar as propriedades e métodos de seu objeto pai.

## Object.getPrototypeOf e Object.setPrototypeOf

Para acessar e definir o protótipo de um objeto em Javascript, você pode usar os métodos `Object.getPrototypeOf()` e `Object.setPrototypeOf()`. Aqui está como eles funcionam:

`Object.getPrototypeOf(obj)`: Este método retorna o protótipo do objeto `obj`. É útil para verificar de onde um objeto herda suas propriedades e métodos.

`Object.setPrototypeOf(obj, prototype)`: Este método define o protótipo do objeto `obj` como o objeto `prototype`. Isso é usado para estabelecer a herança prototípica entre objetos.

```javascript
var pai = {
  a: 10,
};

var filho = {
  b: 20,
};

// Estabelecendo herança prototípica
Object.setPrototypeOf(filho, pai);
console.log(filho.a); // Saída: 10 (herdado do objeto pai)
```

## Cadeia de Protótipos

Em Javascript, a herança prototípica forma uma cadeia de protótipos. Se um objeto não possui uma propriedade ou método, o Javascript procurará no objeto protótipo do objeto, e assim por diante, até encontrar ou não o que está procurando.

Exemplo:

```javascript
var avo = { a: 1 };
var pai = Object.create(avo); // Criando um novo objeto com avo como protótipo
var filho = Object.create(pai); // Criando um novo objeto com pai como protótipo

console.log(filho.a); // Saída: 1 (herdado do objeto avo)
```

## Herança Versus Cópia

A herança prototípica é diferente da cópia de propriedades. Quando um objeto herda de outro, ele não cria cópias das propriedades do objeto pai, mas sim compartilha uma referência ao protótipo. Isso significa que as alterações nos objetos pai afetam os objetos filhos que herdam essas propriedades.

```javascript
avo.a = 42;
console.log(filho.a); // Saída: 42 (alterações no objeto avo refletem nos objetos filhos)
```

A herança prototípica é um dos conceitos fundamentais do Javascript e é uma parte essencial da orientação a objetos na linguagem. Ela permite a criação de hierarquias de objetos e a reutilização eficiente de código, tornando o Javascript uma linguagem poderosa para desenvolvimento de software.
