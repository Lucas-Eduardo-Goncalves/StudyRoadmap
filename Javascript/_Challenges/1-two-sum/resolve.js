const nums = [2, 7, 12, 15];
const target = 14;

/**
 * Buscar dos números em um array que somem um valor.
 *
 * @param {number[]} nums - Um array de numeros que será buscado.
 * @param {number} target - O valor que os números devem somar.
 * @return {number[]} - Os indíce dos dois números que somam o valor.
 */

function twoSum(nums, target) {
  const hashmap = new Map();
  let result = [];

  findThowSum: for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    const diff = target - num;

    if (hashmap.has(diff)) {
      result = [hashmap.get(diff), index];
      break findThowSum;
    }

    hashmap.set(num, index);
  }

  return result;
}

console.log(twoSum(nums, target));
