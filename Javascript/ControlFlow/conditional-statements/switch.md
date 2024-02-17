# Switch

A declaração `switch` em Javascript é uma estrutura condicional que avalia uma expressão e executa um conjunto de instruções com base no valor resultante dessa expressão. A sintaxe básica da declaração `switch` é a seguinte:

```javascript
switch (expressão) {
  case valor1:
    // Instruções executadas quando o resultado da expressão corresponde a valor1
    break;
  case valor2:
    // Instruções executadas quando o resultado da expressão corresponde a valor2
    break;
  ...
  case valorN:
    // Instruções executadas quando o resultado da expressão corresponde a valorN
    break;
  default:
    // Instruções executadas quando nenhum dos valores corresponde ao valor da expressão
    break;
}
```

Aqui está uma explicação detalhada do funcionamento do `switch`:

**Expressão**: A expressão é avaliada uma vez. Seu resultado é comparado com os
valores especificados nos casos (`case`) dentro do `switch` para determinar qual bloco
de código será executado. A expressão pode ser de qualquer tipo, mas geralmente é uma
variável ou uma expressão que retorna um valor.

**Case (Clauses)**: Os `case` cláusulas dentro do `switch` especificam os valores
possíveis que a expressão pode ter e os blocos de código associados a esses valores.
Se o resultado da expressão corresponder a um dos valores `case`, o bloco de código
associado a esse `case` será executado. Cada `case` deve ser único e não pode ser
duplicado dentro do mesmo `switch`.

**Break Statement**: A instrução `break` é usada para sair do `switch` após a execução
do bloco de código associado a um `case`. Se o `break` não for incluído após um
`case`, o código continuará a ser executado nos casos subsequentes, independentemente
de corresponderem ou não à expressão. Isso é conhecido como "fall-through".

**Default Clause**: O `default` é opcional e é usado para executar um bloco de
código se nenhum dos `case` corresponder ao valor da expressão. É semelhante a um
`else` em uma declaração `if...else`. O `default` deve ser colocado no final do
`switch` e não requer um `break`, pois o `switch` é encerrado automaticamente após a
execução do `default`.

Aqui está um exemplo para ilustrar o uso do `switch`:

```javascript
let diaDaSemana = 3;
let nomeDoDia;

switch (diaDaSemana) {
  case 1:
    nomeDoDia = "Domingo";
    break;
  case 2:
    nomeDoDia = "Segunda-feira";
    break;
  case 3:
    nomeDoDia = "Terça-feira";
    break;
  case 4:
    nomeDoDia = "Quarta-feira";
    break;
  case 5:
    nomeDoDia = "Quinta-feira";
    break;
  case 6:
    nomeDoDia = "Sexta-feira";
    break;
  case 7:
    nomeDoDia = "Sábado";
    break;
  default:
    nomeDoDia = "Dia inválido";
}

console.log(nomeDoDia); // Saída: Terça-feira
```

Neste exemplo:

- A variável `diaDaSemana` é `3`.
- O `switch` avalia `diaDaSemana` e encontra um `case` correspondente a `3`.
- Portanto, as instruções dentro do bloco associado ao `case 3` são executadas,
  atribuindo "Terça-feira" à variável `nomeDoDia`.
- O `break` é incluído após o bloco do `case 3`, o que impede a execução de outros casos.
- Como resultado, o `console.log(nomeDoDia)` exibe "Terça-feira".

O `switch` é útil quando você precisa tomar decisões com base em uma expressão que
pode ter múltiplos valores possíveis. Ele oferece uma alternativa concisa e legível ao
encadeamento de várias instruções `if...else`.
