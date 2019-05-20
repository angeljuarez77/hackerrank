const fallenApples = [2, 3, -4];
const fallenOranges = [3, -2, -4];
const startOfHouse = 7;
const endOfHouse = 10;
const appleTree = 4;
const orangeTree = 12;

function appleAndOrange(s, t, a, b, apples, oranges){

  function formHouseRange(s, t){
    const arr = [];
    for(let i = s; s < t + 1; s++){
      arr.push(s);
    };
    return arr;
  };

  const samsHouse = formHouseRange(s, t); // arr w/ range from s - t
  const applePlacements = []; // arr w/ a + apples[i]
  const orangePlacements = []; // arr w b + oranges[i]
  let applesOnHouse = 0; // to be used later to count apples
  let orangesOnHouse = 0; // to be used later to count oranges

  return samsHouse;
};

const results = appleAndOrange(startOfHouse, endOfHouse, appleTree, orangeTree, fallenApples, fallenOranges);

console.log(results);