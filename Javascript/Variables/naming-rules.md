# Regras de nomenclatura

As regras de nomenclatura (ou convenções de nomenclatura) no Javascript são um conjunto de diretrizes que os desenvolvedores seguem para nomear variáveis, funções e outros identificadores em seus programas. Seguir boas práticas de nomenclatura torna o código mais legível, mantém a consistência e facilita a colaboração em projetos de programação.

Lembrando que, embora essas regras e convenções de nomenclatura sejam boas práticas, a consistência é fundamental. Independentemente do estilo que você escolher, é importante aplicá-lo de forma consistente em todo o seu código. Isso facilita a manutenção e a colaboração com outros desenvolvedores.

Aqui estão as regras de nomenclatura no Javascript:

## Case-Sensitivity

Javascript é uma linguagem case-sensitive, o que significa que diferencia maiúsculas de minúsculas. Isso significa que `minhaVariavel` e `minhavariavel` são consideradas diferentes.

## Início do Nome

Os identificadores em Javascript devem começar com uma letra (a-z ou A-Z), um sublinhado (\_) ou um cifrão ($).
Não é comum começar um identificador com um cifrão, a menos que seja usado para fins específicos de bibliotecas ou frameworks.

## Caracteres Permitidos

Após o primeiro caractere, você pode usar letras, números e sublinhados em identificadores Javascript.
Caracteres especiais, como @, #, %, -, +, /, etc... Não são permitidos. Palavras acentuadas e com ç também não são permitidas.

## Camel Case

É uma prática comum em Javascript usar a convenção Camel Case para nomear variáveis e funções. Nela, a primeira palavra começa com letra minúscula e as palavras subsequentes começam com letras maiúsculas, sem espaços ou caracteres especiais.
Exemplo de Camel Case: `minhaVariavel`, `calcularSalario`, `nomeCompleto`.

## Pascal Case

Pascal Case é semelhante ao Camel Case, mas a primeira palavra também começa com uma letra maiúscula. É frequentemente usado para nomear construtores de classes e componentes.
Exemplo de Pascal Case: `ClassePessoa`, `ComponenteBotao`.

## Snake Case

Snake Case usa sublinhados (\_) para separar palavras em um identificador.
É menos comum em Javascript, mas às vezes é usado, principalmente em arquivos e pastas.
Exemplo de Snake Case: `nome_completo`, `funcao_de_utilidade`.

## Kebab Case

Kebab Case usa hífens (-) para separar palavras em um identificador.
É comum em URLs, nomes de arquivos e atributos HTML, mas não é uma prática muito comum em JavaScript.
Não pode ser utilizado para nomear funções, classes e variáveis.
Exemplo de Kebab Case: `nome-completo`, `funcao-de-utilidade`.

## Significado Descritivo

Escolha nomes de identificadores que sejam descritivos e indiquem o propósito da variável ou função.
Isso torna o código mais legível e compreensível para outros desenvolvedores.

## Convenções de Projeto

Em projetos maiores, é comum seguir convenções de nomenclatura específicas da equipe ou do projeto para manter a consistência em todo o código.

## Palavras Reservadas

As palavras reservadas do JavaScript são termos que têm significados especiais na linguagem e não podem ser usados como identificadores (nomes de variáveis, funções, objetos, etc). Tentar usar palavras reservadas como identificadores resultará em erros de sintaxe. Abaixo está uma lista de todas as palavras reservadas do Javascript.

```js
break
case
catch
class
const
continue
debugger
default
delete
do
else
export
extends
false
finally
for
function
if
import
in
instanceof
new
null
return
super
switch
this
throw
true
try
typeof
var
void
while
with
```

Note que essa lista pode ser atualizada com o tempo, à medida que a linguagem JavaScript evolui e novas palavras reservadas são adicionadas. É importante evitar usar qualquer uma dessas palavras reservadas como nomes para variáveis, funções ou propriedades em seu código, a fim de evitar conflitos e erros de sintaxe.
