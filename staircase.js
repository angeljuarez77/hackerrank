function staircase(n){
  const arr = Array.from({length: n - 1}, () => ' ');
  for(let i = n - 1; i > -1; i--){
    arr[i] = '#';
    console.log(arr.join(''));
  }
}

staircase(4);
staircase(12);