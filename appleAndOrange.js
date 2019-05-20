const fallenApples = [2, 3, -4];
const fallenOranges = [3, -2, -4];
const startOfHouse = 7;
const endOfHouse = 10;
const appleTree = 4;
const orangeTree = 12;

function appleAndOrange(s, t, a, b, apples, oranges){

  function calculateFruitPlacement(arr, treePlacement){
    const newArr = [];
    for(let i = 0; i < arr.length; i++){
      const fruitPlace = arr[i] + treePlacement;
      newArr.push(fruitPlace);
    }
    return newArr;
  };

  function areTheyInRange(startOfHouse, endOfHouse, fruitsPlacement){
    let fruitCount = 0;
    for(let i = 0; i < fruitsPlacement.length; i++){
      console.log(fruitsPlacement[i]);
      // if(fruitsPlacement[i] > startOfHouse && fruitsPlacement < endOfHouse){
      //   fruitCount++;
      // }
    };
  // for(let i = 0; i < houseRange.length; i++){
  //   for(let j = 0; j < fruitsPlacement.length; j++){
  //     if(houseRange[i] === fruitsPlacement[j]){
  //       fruitCount++;
  //     }
  //   };
  // };
    return fruitCount;
  };

  const applePlacements = calculateFruitPlacement(apples, a);
  const orangePlacements = calculateFruitPlacement(oranges, b);
  let applesOnHouse = areTheyInRange(s, t, applePlacements);
  let orangesOnHouse = areTheyInRange(s, t, orangePlacements);

  return console.log(orangePlacements);
};

appleAndOrange(startOfHouse, endOfHouse, appleTree, orangeTree, fallenApples, fallenOranges);