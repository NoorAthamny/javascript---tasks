// 1.
const name = "Noor";
const age = 25;

console.log(`My name is ${name} and im ${age} years old `);

// 2.

const favColor = "blue";
const favMovie = "Demon Slayer";
const favFood = "Makloba";

console.log(
  `My favorite color is ${favColor}, i love the ${favMovie} series , and i enjoy eating ${favFood} `
);

// 3.

const a = 20;
const b = 10;

console.log(`the sum of a and b is ${a + b}.`);

// 4.

const day = "monday";
console.log(`Today is ${day}.`);

///////////////////////////////////

// 6.  Modulo Operator Basics:

const x = 35;
console.log(x % 3); // 2

// 7.

function checkOddEven(number) {
  if (number % 2 === 0) {
    console.log(`${number} is EVEN `);
  } else {
    console.log(`${number} is ODD `);
  }
}

checkOddEven(10);
checkOddEven(9);

// 8.

function checkDivi(number) {
  if (number % 5 === 0 && number % 7 === 0) {
    console.log(`${number} is EVEN `);
  } else {
    console.log(`${number} is ODD `);
  }
}
console.log("checkDivi");
checkDivi(35);
checkDivi(30);

// 9.

function countingSteps() {
  for (let i = 1; i <= 20; i++) {
    if (i % 4 === 0) {
      console.log(i);
    }
  }
}

countingSteps();

// 10.
function checkNumber(number) {
  if (number > 10 && number < 20) {
    console.log(number);
  }
}
checkNumber(14);

// 11.

function lessGreater(number) {
  if (number > 10 || number < -5) {
    console.log(number);
  }
}

lessGreater(-7);
lessGreater(15);

// 12.
function notCheck(i) {
  if (i != true) {
    console.log(i === false);
  } else {
    console.log(i === true);
  }
}

notCheck(false);

// 13.

function combiningCheck(number) {
  if ((number < 10 && number > 5) || (number > 20 && number < 30)) {
    console.log(number);
  }
}

combiningCheck(12);
combiningCheck(8);
combiningCheck(22);
combiningCheck(43);

// ////////////////////////////////////
