const first = [1, 2, 3, 4, 5];
const second = [12, 13, 14, 15, 16];
const third = [11, 123, 12309, 123123, 2133321];

function miniMaxSum(arr){
  // drop the lowest number and reduce for max sum
  // vice versa
  const lowest = Math.min(...arr);
  const maxArr = arr.filter(number => number !== lowest);
  const highestSum = maxArr.reduce((acc, curr) => acc + curr);

  const highest = Math.max(...arr);
  const minArr = arr.filter(number => number !== highest);
  const lowestSum = minArr.reduce((acc, curr) => acc + curr);
  const finalArr = [lowestSum, highestSum];
  return finalArr.join(' ');
}

// console.log(miniMaxSum(first));
// console.log(miniMaxSum(second));

function refinedMinMaxSum(arr){
  const highest = [...arr];
  const lowest = [...arr];

  function highSum(){
    highest.sort((a, b) => a - b).splice(0, 1);
    return highest.reduce((acc, curr) => acc + curr);
  }

  function lowSum(){
    lowest.sort((a, b) => a - b).splice(arr.length - 1, 1);
    return lowest.reduce((acc, curr) => acc + curr);
  }

  return [lowSum(), highSum()].join(' ');
};

console.log(refinedMinMaxSum(first));
console.log(refinedMinMaxSum(second));
console.log(refinedMinMaxSum(third));