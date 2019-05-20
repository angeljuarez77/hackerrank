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

  function calculateFruitPlacement(arr, treePlacement){
    return arr.map(fruitSpot => treePlacement + fruitSpot);
  };

  function areTheyInRange(houseRange, fruitsPlacement){
    let fruitCount = 0;
    for(let i = 0; i < houseRange.length; i++){
      for(let j = 0; j < fruitsPlacement.length; j++){
        if(houseRange[i] === fruitsPlacement[j]){
          fruitCount++;
        }
      };
    };
    return fruitCount;
  };

  const samsHouse = formHouseRange(s, t);
  const applePlacements = calculateFruitPlacement(apples, a);
  const orangePlacements = calculateFruitPlacement(oranges, b);
  let applesOnHouse = areTheyInRange(samsHouse, applePlacements);
  let orangesOnHouse = areTheyInRange(samsHouse, orangePlacements);

  return `${applesOnHouse} \n${orangesOnHouse}`;
};

const results = appleAndOrange(startOfHouse, endOfHouse, appleTree, orangeTree, fallenApples, fallenOranges);

console.log(results);