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


