// variable
let myName = 'Elliot'; // string
let myAge = 20; // int
let ifTall = false; // boolean

// output (save the file before execute)
console.log('Hello world.');

// Math
let monthlyIncome = 500 + 1;
let expenses = 500;
let profit = monthlyIncome - expenses;
let yearlyIncome = profit * 12;
let share = yearlyIncome / 2;

console.log(share);

//comparisions
// > greater than.   < less than
5 === 5; // true
5 !== 3; // true

//conditional statements
let weather = 'sunny';

if (weather === 'raining') {
  console.log('Stay inside.');
} else if (weather === 'sunny') {
  console.log('Go outside');
}

//logical operations
let temp = 80;
let isSunny = true;

if (temp > 75 && isSunny === true) {
  console.log('Go outside.');
} else if (temp > 75 || isSunny === true) {
  console.log('Maybe go out.');
}

//array
let invertory = [
  'apple',
  'banana',
  'orange',
  'apricot',
  'avocado',
  'blueberry',
  'blackberry',
];
console.log(invertory);
console.log(invertory[1] + '\n'); // array[index]

//loop
// for (let var = 0; index < 5; index++){}
for (let index = invertory.length - 1; index >= 0; index--) {
  console.log(invertory[index]);
}

console.log();

//object
let item = {
  name: 'banana',
  count: 5,
  colour: 'yellow',
};
console.log(item);

//functions
function makeNoise() {
  console.log('Beep!');
}
makeNoise();
//challenge
function addListsValues(listOne, listTwo) {
  let sum = [];
  for (let i = 0; i < listOne.length; i++) {
    sum.push(listOne[i] + listTwo[i]);
  }
  return sum;
}
let listOne = [1, 3, 5];
let listTwo = [2, 4, 6];
console.log(addListsValues(listOne, listTwo));

//errors
function displayEvenNumbers() {
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  let evenNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      evenNumbers.push(numbers[i]);
    }
  }
  return evenNumbers;
}

console.log(displayEvenNumbers()); // should return [2,4,6,8]
