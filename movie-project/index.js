// 1.

function movieRating(number) {
  console.log(
    number > 7 ? "Highly rated movie" : "This movie has room for improvement"
  );
}
movieRating(8);
movieRating(7);

// 2.

function movieBudget(num) {
  const oneMill = 1000000;
  const hundredMill = 100000000;

  if ((num > oneMill && num < hundredMill) || num > hundredMill) {
    console.log("Big-budget movie");
  } else {
    console.log("Indie movie");
  }
}

movieBudget(10000001);

// 3. loooooooooops

// loop
// 1.

const movieTitles1 = ["Inception", "The Dark Knight", "Interstellar"];

let longestWord = "";

for (i = 0; i < movieTitles1.length; i++) {
  if (movieTitles1[i].length > longestWord.length) {
    longestWord = movieTitles1[i];
  }
}

console.log(longestWord);

// 2.

let averageRatings = null;
sum = 0;
const movieRatings = [8.3, 7.5, 9.0, 8.7];

for (i = 0; i < movieRatings.length; i++) {
  sum += movieRatings[i];
  averageRatings = sum / movieRatings.length;
}

console.log(averageRatings);

// 3.

const movieTitlesTwo = ["Inception", "The Dark Knight", "Interstellar"];

let movieTitlesThree = [];

for (i = movieTitlesTwo.length - 1; i >= 0; i--) {
  movieTitlesThree.push(movieTitlesTwo[i]);
}

console.log(movieTitlesThree);

// 4.

const movieRatingsAdd = [8.3, 7.5, 9.0, 8.7];

for (i = 0; i < movieRatingsAdd.length; i++) {
  movieRatingsAdd[i] += 0.5;
}

console.log(movieRatingsAdd);

// 5.

let biggerRatings = [];

for (i = 0; i < movieRatings[i]; i++) {
  if (movieRatings[i] >= 8.0) {
    biggerRatings.push(movieRatings[i]);
  }
}
console.log(biggerRatings);

// 6.

const movieRatingsfour = [8.3, 8.7, 9.0, 8.7, 8.3];

let specificRating = [];

for (let i = 0; i < movieRatingsfour.length; i++) {
  if (movieRatingsfour[i] == 8.7) {
    specificRating.push(movieRatingsfour[i]);
  }
}
console.log(specificRating.length);

// 7.

const watchList = ["Inception", "The Dark Knight"];
const wishList = ["Interstellar", "Inception"];
let bothList = [];

for (let i = 0; i < watchList.length; i++) {
  for (let j = 0; j < wishList.length; j++) {
    if (watchList[i] === wishList[j]) {
      bothList.push(watchList[i]);
    }
  }
}

console.log(bothList);

// 8

const movieRatingsFive = [8.3, 8.7, 9.0, 7.5];
const minRating = 8.0;
let allAbove = true;

for (let i = 0; i < movieRatingsFive.length; i++) {
  if (movieRatingsFive[i] < minRating) {
    allAbove = false;
  } else {
    allAbove = true;
  }
}
console.log(allAbove);

// 9.

const movieRatingsSix = [8.3, 8.7, 9.0, 7.5];
let highestRating = 0;

for (let i = 0; i < movieRatingsSix.length; i++) {
  if (movieRatingsSix[i] > highestRating) {
    highestRating = movieRatingsSix[i];
  }
}

console.log(highestRating);
