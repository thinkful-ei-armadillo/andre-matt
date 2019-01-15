'use strict';

function max(numbers) {
  if(numbers.length === 0) {
    return null;
  }
  let i = 0;
  let max = numbers[0];
  while(i < numbers.length) {
    if(numbers[i] > max) {
      max = numbers[i];
    }
    i++;
  }
  return max;
}
function min(numbers) {
  if(numbers.length === 0) {
    return null;
  }
  let i = 0;
  let min = numbers[0];
  while(i < numbers.length) {
    if(numbers[i] < min) {
      min = numbers[i];
    }
    i++;
  }
  return min;
}
function average(numbers) {
  let sum = 0;
  numbers.forEach(i => sum += i);
  return sum / numbers.length;
}
console.log(average([1, 2, 3, 2, 10, 2]));

function repeat(fn,n) {
  
  for(let i = 0; i < n; i++){
    fn();
  }
}

function hello() {
  console.log('Hello world');
}

function goodbye(){
  console.log('Good bye world');
}

function filter(arr, fn) {
  // TASK: Define your function here
  let newArr = [];

  //The long way 
  //   for(let i = 0; i < arr.length; i++){
  //     if(fn(arr[i]))
  //      newArr.push(arr[i]);
  //   }

  arr.forEach(i => fn(i)?newArr.push(i):'');
  return newArr;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

//console.log(filteredNames); 
// => ['Rich', 'Ray']



// functions as return values
function hazardWarningCreator(typeOfWarning) {
  let warningCounter = 0;

  return function(location) {
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time${(warningCounter >= 2 || warningCounter === 0) ? '(s)':''} today!`);
  }
}

const rocksWarning = hazardWarningCreator('Rocks on the road!');
const tornadoWarning = hazardWarningCreator('Tornado inbound!!');
const floodWarning = hazardWarningCreator('Flash flood warning!');

rocksWarning('Atlanta, GA');
rocksWarning('Atlanta, GA');
tornadoWarning('Oklahoma City, OK');
floodWarning('Los Angeles, CA');


// foreach, filter, and map
let movements = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

movements = movements.filter(function(i) {
  if(i[0] >= 0 && i[1] >= 0) {
    return i;
  }
});

let totalSteps = movements.map(function(step) { return step[0] + step[1]; });

console.log('Steps: ', totalSteps);
console.log('Movements: ', movements);

movements.forEach((step) => { console.log(step[0] + step[1]); });


// reduce
function decodeWord(acc, el) {
  if(el.length === 3) {
    acc += ' ';
  } else {
    acc += el[el.length - 1].toUpperCase();
  }

  return acc;
}

let words = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';
words = words.split(' ');
let decoded = words.reduce(decodeWord, '');

console.log(decoded);