const arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9]
];

const arr2 = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12]
];

function diagonalDifference(arr){
  function firstDirection(){
    const firstNum = arr[0][0];
    const middleNum = arr[1][1];
    const lastNum = arr[arr.length - 1][arr[0].length - 1];
    const sum = firstNum + middleNum + lastNum;
    return sum;
  }

  function secondDirection(){
    const firstNum = arr[0][arr[0].length - 1];
    const middleNum = arr[1][1];
    const lastNum = arr[arr.length - 1][0];
    const sum = firstNum + middleNum + lastNum;
    return sum;
  }

  const firstResult = firstDirection()
  const secondResult = secondDirection()
  return Math.abs(firstResult - secondResult);
}

const first = diagonalDifference(arr1);
const second = diagonalDifference(arr2);
console.log(first);
console.log(second);