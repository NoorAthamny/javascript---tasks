/*

// udemy sction 8
// Dice Roll

function rollDie() {
  let roll = Math.floor(Math.random() * 6) + 1;
  console.log(roll);
}
rollDie();

// ValidPassword

function inValidPassword(password, username) {
  if (password.length > 8) {
    return false;
  }
  // chcek if there is spaces return false
  if (password.indexOf(" ") !== -1) {
    return false;
  }
  // if username is in the pasword return false
  if (password.indexOf(username) !== -1) {
    return false;
  }
  return true;
}

// Or we can use one if with && and || Or
// Or we can save the value of the condition in a const like
// const tooShort = password.length < 8;
// and use if in the if(tooShort || hasSpace)

console.log(inValidPassword("Noor8291", "Noor"));
console.log(inValidPassword("Noor8291", "Athamny"));

// pamgram = all letters is in the paragraph
// the five boxing wizards jump quickly
function isPangram(sentance) {
  let lowerCase = sentance.toLowerCase();
  let letters = "abcdefghijklmnopqrstuzwxyz";
  for (let char of letters) {
    // console.log(char);
    if (lowerCase.indexOf(char) === -1) {
      return false;
    }
  }
  return true;
}
console.log(isPangram("the five boxing wizards jump quickly"));
*/

function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result = result * i;
  }
  return result;
}

console.log(factorial(5));

function fibonacci(target) {
  const seq = [0, 1];
  for (let i = 2; i <= target + 1; i++) {
    const next = seq[i - 2] + seq[i - 1];
    seq.push(next);
  }
  return seq;
}
console.log(fibonacci(5));

//

// const multibly = (n) => n * n;

const arr = [33, 442, 1231, 4, 5, 6, 121, 543];

const arrSorted = arr.slice().sort((a, b) => a - b); // b - a = descended
const arrDescended = arr.slice().sort((a, b) => b - a);
console.log(arrSorted);
console.log(arrDescended);
// .slice() copy arr so we can sort both ways...
// a       b
// 33   -   442
// -  = a first / + = b before a / = = index wont change

const totle = arr.reduce((acc, curr) => {
  return acc + curr;
});

console.log(arr);
console.log(totle);
const maxnum = arr.reduce((max, curr) => {
  if (curr < max) return curr; // curr > max return the max //
  return max;
});

const maxNumber = arr.reduce((max, curr) => {
  return Math.max(max, curr);
});

const minNumber = arr.reduce((min, curr) => {
  return Math.min(min, curr);
});

console.log(maxnum);
console.log(maxNumber);
console.log(minNumber);

const arr2 = [10, 20, 30, 40, 50];
const sum = arr2.reduce((sum, curr) => {
  return sum + curr;
}, 100);

console.log(sum);

const votes = [
  "y",
  "y",
  "y",
  "y",
  "y",
  "n",
  "n",
  "n",
  "y",
  "y",
  "n",
  "n",
  "n",
  "n",
];

// const result = votes.reduce((tally, val) => {
//   if (tally[val]) {
//     tally[val]++;
//   } else {
//     tally[val] = 1;
//   }
//   return tally;
// }, {});
// console.log(result);
const result = votes.reduce((tally, val) => {
  tally[val] = (tally[val] || 0) + 1;
  return tally;
}, {});
console.log(result);

const book = [
  {
    title: "book1",
    rating: 4,
  },

  {
    title: "book2",
    rating: 3.2,
  },

  {
    title: "book3",
    rating: 3.6,
  },

  {
    title: "book4",
    rating: 2.4,
  },

  {
    title: "book5",
    rating: 5,
  },

  {
    title: "book6",
    rating: 4.3,
  },
];

const gorupByRating = book.reduce((groupBook, book) => {
  const key = Math.floor(book.rating);
  if (!groupBook[key]) {
    groupBook[key] = [];
  }
  groupBook[key].push(book);

  return groupBook;
}, {});

console.log(gorupByRating);

// recursion

function factorialNum(n) {
  if (n == 1 || n == 0) {
    return 1;
  } else {
    return n * factorialNum(n - 1);
  }
}
console.log(factorialNum(4));

// rest
function fullName(first, last, ...title) {
  console.log("first", first);
  console.log("last", last);
  console.log("title", title);
}

console.log(fullName("Noor", "Athamny", "the goat", "anamzing", "daddy"));

// destructuring arrays
const raceResults = ["Elud", "Feyisa", "Galen", "Ghirmat", "Alphonce"];

// const gold = raceResults[0];
// const silver = raceResults[1];
// const bronze = raceResults[2];
// console.log(gold);
// console.log(silver);
// console.log(bronze);

// same here
const [gold, , silver, bronze] = raceResults;
const [...others] = raceResults;
console.log(gold, silver, bronze);
console.log(gold, silver, ...others);
// if another " , " added will skip one index

// destructuring object

const runner = {
  name: "Elud",
  last: "Feyisa",
  country: "Kenya",
  title: "anything",
};

// const { first, last, ...other } = runner;
// console.log(first, last, other);
// const { country: nation } = runner; // used to access the keys
//Parameters
// function print(person) {
//   const { first, last, title } = person;
//   console.log(`${first} ${last}, ${title}`);
// }
// print(runner);

function print({ name, last, title }) {
  console.log(`${name} ${last}, ${title}`);
}
print(runner);

const role = "host";
const role2 = "maneger";
const person = "noor atha,ny";
const person2 = "noor athatny";

// const team = {};
// team[role] = person;
// console.log(team);
//do all this at once

const team = {
  [role]: person,
  [role2]: person2,
};
console.log(team);

// pick card
function pick(arr) {
  const idx = Math.floor(Math.random() * arr.length);
  return arr[idx];
}

function getCard() {
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  const suits = ["clubs", "spades", "hearts", "diamond"];

  const value = pick(values); // random pick from the values array
  const suit = pick(suits); // random pick from the suits array
  return {
    value,
    suit,
  };
}

console.log(getCard());

//
// setInterval()
// oop
// recursion
// methods
