const firstTime = '12:00:12PM';
const secondTime = '12:00:13AM';
const thirdTime = '01:23:42AM';
const fourthTime = '02:12:23AM';

function timeConversion(str){
  // const time = str.slice(0, 8).split(':').map(num => parseInt(num));
  const time = str.slice(0, 8).split(':');
  const timeOfDay = str.slice(-2);
  if(time[0] === '12' && timeOfDay === 'AM'){
    return ['00', time[1], time[2]].join(':');
  } else if(time[0] === '12' && timeOfDay === 'PM'){
    return time.join(':');
  } else if (timeOfDay === 'PM'){
    const hours = 12 + parseInt(time[0]);
    return [hours, time[1], time[2]].join(':');
  } else {
    return time.join(':');
  }
}

const firstResult = timeConversion(firstTime);
const secondResult = timeConversion(secondTime);
const thirdResult = timeConversion(thirdTime);
const fourthResult = timeConversion(fourthTime);

console.log(firstTime, firstResult);
console.log(secondTime, secondResult);
console.log(thirdTime, thirdResult);
console.log(fourthTime, fourthResult);