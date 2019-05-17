const a = [1, 2, 3];
const b = [3, 2, 1];

function compareTriplets(arr1, arr2){
  let first = 0;
  let second = 0;
  for(let i = 0; i < arr1.length; i++){
    if(arr1[i] > arr2[i]){
      first++;
    } else if(arr2[i] > arr1[i]){
      second++;
    }
  }
  const finalArr = [first, second];
  return finalArr;
}
compareTriplets(a, b);
compareTriplets([5, 6, 7], [3, 6, 10]);