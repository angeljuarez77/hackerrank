const arr = [1, 1, 0, -1, -1];

function plusMinus(arr){
  let positives = 0;
  let negatives = 0;
  let zeros = 0;
  arr.forEach(
    num => {
      if(num > 0){
        positives++;
      } else if(num < 0){
        negatives++;
      } else if(num === 0){
        zeros++;
      }
    }
  )
  const positivesRatio = Number.parseFloat(positives/arr.length).toFixed(6);
  const negativesRatio = Number.parseFloat(negatives/arr.length).toFixed(6);
  const zerosRatio = Number.parseFloat(zeros/arr.length).toFixed(6);
  return console.log()
};

console.log(plusMinus(arr));