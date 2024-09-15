// /*
// // 1.

// function movieRating(number) {
//   console.log(
//     number > 7 ? "Highly rated movie" : "This movie has room for improvement"
//   );
// }
// movieRating(8);
// movieRating(7);

// // 2.

// function movieBudget(num) {
//   const oneMill = 1000000;
//   const hundredMill = 100000000;

//   if ((num > oneMill && num < hundredMill) || num > hundredMill) {
//     console.log("Big-budget movie");
//   } else {
//     console.log("Indie movie");
//   }
// }

// movieBudget(10000001);

// // 3. loooooooooops

// // loop
// // 1.

// const movieTitles1 = ["Inception", "The Dark Knight", "Interstellar"];

// let longestWord = "";

// for (i = 0; i < movieTitles1.length; i++) {
//   if (movieTitles1[i].length > longestWord.length) {
//     longestWord = movieTitles1[i];
//   }
// }

// console.log(longestWord);

// // 2.

// let averageRatings = null;
// sum = 0;
// const movieRatings = [8.3, 7.5, 9.0, 8.7];

// for (i = 0; i < movieRatings.length; i++) {
//   sum += movieRatings[i];
//   averageRatings = sum / movieRatings.length;
// }

// console.log(averageRatings);

// // 3.

// const movieTitlesTwo = ["Inception", "The Dark Knight", "Interstellar"];

// let movieTitlesThree = [];

// for (i = movieTitlesTwo.length - 1; i >= 0; i--) {
//   movieTitlesThree.push(movieTitlesTwo[i]);
// }

// console.log(movieTitlesThree);

// // 4.

// const movieRatingsAdd = [8.3, 7.5, 9.0, 8.7];

// for (i = 0; i < movieRatingsAdd.length; i++) {
//   movieRatingsAdd[i] += 0.5;
// }

// console.log(movieRatingsAdd);

// // 5.

// let biggerRatings = [];

// for (i = 0; i < movieRatings[i]; i++) {
//   if (movieRatings[i] >= 8.0) {
//     biggerRatings.push(movieRatings[i]);
//   }
// }
// console.log(biggerRatings);

// // 6.

// const movieRatingsfour = [8.3, 8.7, 9.0, 8.7, 8.3];

// let specificRating = [];

// for (let i = 0; i < movieRatingsfour.length; i++) {
//   if (movieRatingsfour[i] == 8.7) {
//     specificRating.push(movieRatingsfour[i]);
//   }
// }
// console.log(specificRating.length);

// // 7.

// const watchList = ["Inception", "The Dark Knight"];
// const wishList = ["Interstellar", "Inception"];
// let bothList = [];

// for (let i = 0; i < watchList.length; i++) {
//   for (let j = 0; j < wishList.length; j++) {
//     if (watchList[i] === wishList[j]) {
//       bothList.push(watchList[i]);
//     }
//   }
// }

// console.log(bothList);

// // 8

// const movieRatingsFive = [8.3, 8.7, 9.0, 7.5];
// const minRating = 8.0;
// let allAbove = true;

// for (let i = 0; i < movieRatingsFive.length; i++) {
//   if (movieRatingsFive[i] < minRating) {
//     allAbove = false;
//   } else {
//     allAbove = true;
//   }
// }
// console.log(allAbove);

// // 9.

// const movieRatingsSix = [8.3, 8.7, 9.0, 7.5];
// let highestRating = 0;

// for (let i = 0; i < movieRatingsSix.length; i++) {
//   if (movieRatingsSix[i] > highestRating) {
//     highestRating = movieRatingsSix[i];
//   }
// }

// console.log(highestRating);
// */
// //  arrays.......

// // 1.

// const movieLibrary1 = ["Inception", "The Matrix", "Interstellar"];
// const movieCheck = "Inception";

// if (movieLibrary1.includes(movieCheck)) {
//   console.log(`The movie ${movieCheck} is included`);
// } else {
//   console.log(`The movie ${movieCheck} is NOT included`);
// }

// // 2.

// const releaseDate = ["1999", "2010", "2014"];

// console.log(releaseDate.reverse());

// // 3.

// const movieGenres3 = ["Sci-Fi", "Action", "Adventure"];

// console.log(movieGenres3.join(" , "));

// // 4.

// const genreToCheck = "Action";

// if (movieGenres3.includes(genreToCheck)) {
//   console.log(`The genre ${genreToCheck} is included`);
// } else {
//   console.log(`The genre ${genreToCheck} is NOT included`);
// }

// const movieLibrary2 = ["Inception", "The Matrix", "Interstellar"];

// const specificMovie = "Interstellar";

// if (movieLibrary2.includes(specificMovie)) {
//   console.log(
//     `${specificMovie} found at index ${movieLibrary2.indexOf(specificMovie)}`
//   );
// } else {
//   console.log(`${specificMovie} is NOT found`);
// }

// // 6.

// const upComingReleases = ["Avatar", "Dune", "Tenet"];
// upComingReleases.pop();
// console.log(upComingReleases);

// // 7.

// const classicMovies = ["The Godfather", "Citizen Kane"];

// const newMovie = "Caseblance";

// classicMovies.unshift(newMovie);
// console.log(classicMovies);

// // 8.

// const filmNoir8 = ["The Maltese Falcon", "Touch of Evil", "Double Indemnity"];
// const removedFilm = filmNoir8.shift();
// console.log(removedFilm);

// // 9.

// const comedyMovies9 = ["Superbad", "The Hangover"];
// const actionMovies9 = ["Die Hard", "John Wick"];

// const newArraycon = comedyMovies9.concat(actionMovies9);
// console.log(newArraycon);

// // 10.

// const movieTitles10 = ["Inception", "The Matrix", "Interstellar"];

// console.log(movieTitles10.sort());

// // 11.

// const quotesString =
//   "i'll be back, May the force be with you, To infinity and beyond";
// const newArray = quotesString.split(",");
// console.log(newArray);

// // 12.
// const topMovies12 = [
//   "The Shawshank Redemption",
//   "The Godfather",
//   "The Dark Knight",
// ];
// const n12 = 2;

// const newTopMovies = topMovies12.splice(0, n12);
// console.log(newTopMovies);

// // 13.

// const movieWishlist13 = ["The Matrix 4", "Avatar 2", "Dune"];

// movieWishlist13.splice(0, movieWishlist13.length);

// console.log(movieWishlist13);

// // 14.

// const movies15 = ["Inception", "Interstellar"];
// const newMovie1 = "tenet";
// // movies15.push(newMovie1);
// movies15.splice(movies15.length, 0, newMovie1);

// console.log(movies15);

// // 15.

// movies15.splice(0, 1);
// console.log(movies15);

// // 16.

// const movies = ["Inception", "Interstellar", "Tenet"];

// console.log(movies.join(", "));

// // 17.

// const movieToFind = "Interstellar";
// console.log(movies.indexOf(movieToFind));

// // 18.

// movies.reverse();
// console.log(movies);

// // 19.

// const releaseYears = [2001, 2023, 1998, 2024];

// releaseYears.sort((a, b) => a - b);

// console.log(releaseYears);

//  function

// 1.
let movieRatings = [];

function initializeRatings() {
  movieRatings = [];
}

initializeRatings();

// 2.

function addRatings(movieTitle, rating) {
  if (typeof movieTitle !== "string") {
    console.log("Error: You must wrting a name (string)");
    return;
  }

  if (typeof rating !== "number") {
    console.log("Error: You must wrting a number");
    return;
  }
  movieRatings.push([movieTitle, rating]);
}

addRatings(1, "2");
addRatings("DemonSlayer", 9.5);
addRatings("Hulk", 9);
addRatings("Noor", 4.3);
addRatings("avatar", 7.5);
addRatings("avengers", 10);

console.log(movieRatings);

// 3.

function findRating(movieTitle) {
  for (let i = 0; i < movieRatings.length; i++) {
    if (movieRatings[i][0] === movieTitle) {
      console.log(movieRatings[i][1]);
      return;
    }
  }
  console.log("Movie Not Found");
}
console.log(movieRatings);
findRating("Hulk");
findRating("DemonSlayer");
findRating("avatar");

// 4.
function updateRating(movieTitle, newRating) {
  for (let i = 0; i < movieRatings.length; i++) {
    if (movieRatings[i][0] === movieTitle) {
      movieRatings[i][1] = newRating;
      return;
    }
  }
  console.log("Movie Not Found");
}

updateRating("Hulk", 7);
updateRating("Bro", 10);
console.log(movieRatings);

// 5.

function removeRating(movieTitle) {
  for (let i = 0; i < movieRatings.length; i++) {
    if (movieRatings[i][0] === movieTitle) {
      movieRatings.splice(i, 1);
      return;
    }
  }
  console.log("Movie Not Found");
}

removeRating("avatar");
removeRating("Hulk22");
console.log(movieRatings);

// 6.

function listMovie() {
  for (let i = 0; i < movieRatings.length; i++) {
    const movie = movieRatings[i];
    console.log(`${movie[0]}- ${movie[1]}`);
  }
}
listMovie();

// 7.

let rating = 0;

function highestRateMovie() {
  for (let i = 0; i < movieRatings.length; i++) {
    if (movieRatings[i][1] > rating) {
      rating = movieRatings[i][1];
    }
  }
  if (rating === 0) {
    console.log("There is no RATINGS");
  }
  console.log(rating);
}

highestRateMovie();

// pure Function

// 1.

// [3, 4, 5, 3, 5];

function calcAvgRaing(arr) {
  let total = 0;

  // 2 way for this q
  // // 1.
  //   for (let i = 0; i < arr.length; i++) {
  //     total += arr[i];
  //   }
  // 2.
  for (let sum of arr) {
    total += sum;
    // total = total + sum;
  }
  return total / arr.length;
}

console.log(calcAvgRaing([3, 4, 5, 3, 5]));

// 2.

function filterByRating(arr) {
  return arr.filter((num) => num >= 4);
}
console.log(filterByRating([3, 4, 5, 2, 1, 5]));

// 3.

function findHighestRating(arr) {
  sum = 0;
  for (let num of arr) {
    if (num > sum) {
      // adding a sum and in the loop if the num the bigger will update the sum.
      sum = num;
    }
  }
}
findHighestRating([3, 4, 5, 3, 5]);
console.log(sum);

// 4.

function ratingAboveThreshold(arr) {
  return arr.filter((num) => num > 3);
}

console.log(ratingAboveThreshold([3, 4, 5, 2, 1, 5]));

// 5.

function countInRatingRange(ratings, lower, upper) {
  return ratings.filter((num) => num >= lower && num <= upper).length; // 3 not 4 how
}

console.log(countInRatingRange([3, 4, 5, 2, 1, 5], 4, 5));

// 6.

function uniqueRatings(arr) {
  const newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArray.includes(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}
console.log(uniqueRatings([5, 3, 4, 3, 5, 4, 5]));

// 7.

function mergeRating(arr1, arr2) {
  const combine = [...arr1, ...arr2];
  const newArray = [];

  for (let i = 0; i < combine.length; i++) {
    if (!newArray.includes(combine[i])) {
      newArray.push(combine[i]);
    }
  }
  return newArray;
}

console.log(mergeRating([5, 3, 4], [2, 3, 5]));

// 8.
function ratingsDefferention(arr1, arr2) {
  let sumOne = 0;
  for (let sum of arr1) {
    sumOne = sumOne + sum / arr1.length;
  }

  let sumTwo = 0;
  for (let sum of arr2) {
    sumTwo = sumTwo + sum / arr2.length;
  }
  // console.log(sumOne);
  const deff = sumOne - sumTwo;
  return deff;
}

console.log(ratingsDefferention([4, 4, 4, 4, 5], [3, 3, 3, 3]));

// output 1.2

// 9.

function filterRatingByCriteria(ratings, less, greater) {
  return ratings.filter((num) => num > less && num < greater); // 3 not 4 how
}
console.log(filterRatingByCriteria([1, 2, 3, 4, 5], 2, 5));

// arrow functions

// 1. . Simple Arrow Function Conversion

// function getMovies(movies) {
//   return movies.map((movie) => movie.title);
// }

const getMovies = (movies) => movies.map((movie) => movie.title);

// 2.

// function averageMovieRating(rating) {
//   if (rating > 7) {
//     return "Good";
//   } else if (rating > 5) {
//     return "Average";
//   } else {
//     return "Bad";
//   }
// }

const averageMovieRating = (rating) => {
  if (rating > 7) {
    return "Good";
  } else if (rating > 5) {
    return "Average";
  } else {
    return "Bad";
  }
};

console.log(averageMovieRating(9));

// 3.

// function getTotalMovieLength(movies) {
//   let totalLength = 0;
//   for (let i = 0; i < movies.length; i++) {
//     totalLength += movies[i].length;
//   }
//   return "Total movie length is " + totalLength + " minutes";
// }

const getTotalMovieLength = (movies) => {
  let totalLength = 0;
  for (let i = 0; i < movies.length; i++) {
    totalLength += movies[i].length;
  }
  return "Total movie length is " + totalLength + " minutes";
};

// 4.

// const sortedMovies = movies.sort(function(a, b) {
//   return b.averageRating - a.averageRating;
//  });

const sortedMovies = movies.sort((a, b) => b.averageRating - a.averageRating);
