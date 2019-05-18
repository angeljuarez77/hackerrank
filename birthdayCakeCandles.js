const first = [4, 5, 12, 12, 2];
const second = [-12, 123, 12332152341, 1234121212, 12]
const third = [1, 1, 1, 1, 1];

function birthdayCakeCandles1(arr){
  return console.log(arr.filter(number => number === Math.max(...arr)).length);
}

function birthdayCakeCandles(ar) {
  return console.log(ar.filter(number => number === Math.max(...ar)).length);
}

birthdayCakeCandles(first);
birthdayCakeCandles1(first);

birthdayCakeCandles(second);
birthdayCakeCandles(third)