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

const arr3 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
];

function diagonalDifference(arr){
  function firstDirection(){
    const axisMax = arr.length - 1;
    let sum = 0;
    for(let i = 0; i < axisMax + 1; i++){
      sum += arr[i][i];
    }
    return sum;
  }
  const firstResult = firstDirection();

  function secondDirection(){
    const axisMax = arr.length - 1;
    let sum = 0;
    for(let i = 0; i < axisMax + 1; i++){
      sum += arr[axisMax - i][i];
    }
    return sum;
  }
  const secondResult = secondDirection();

  return Math.abs(firstResult - secondResult);
}

console.log(diagonalDifference(arr3));