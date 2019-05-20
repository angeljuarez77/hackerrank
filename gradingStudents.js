const firstGrades = [32, 23, 44, 45, 86, 22, 14];
const secondGrades = [48, 42, 67, 88, 86, 28, 29, 39, 69];

function gradingStudents(arr){

  const result = arr.map(
    number => {
      if(number < 38){
        return number;
      } else if(number % 5 === 0){
        return number;
      } else {
        const originalNum = number;
        let count = 0;

        while (number % 5 !== 0){
          count++;
          number++;
        };

        if(count < 3){
          return number;
        } else {
          return originalNum;
        }
      }
    }
  );

  return result;
}

const firstResult = gradingStudents(firstGrades);
const secondResult = gradingStudents(secondGrades);

console.log(firstResult);
console.log(secondResult);