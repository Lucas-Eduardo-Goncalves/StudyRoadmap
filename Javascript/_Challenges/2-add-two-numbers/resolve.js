const list1 = [9, 9, 9, 9, 9, 9, 9];
const list2 = [9, 9, 9, 9];

/**
 * Adiciona o valor de dois arrays como um numero
 *
 * @param {Array} list1 - Primeira lista de numeros.
 * @param {Array} list2 - Segunda lista de numeros.
 * @return {Array} Retorna uma lista de numeros que foram somados.
 */

function handleAddTwoNumbers(list1, list2) {
  const num1 = +list1.reverse().join("");
  const num2 = +list2.reverse().join("");

  return (num1 + num2)
    .toString()
    .split("")
    .reverse()
    .map((value) => +value);
}

console.log(handleAddTwoNumbers(list1, list2));
