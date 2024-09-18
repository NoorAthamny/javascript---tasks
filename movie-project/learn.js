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
