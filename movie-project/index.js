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

// const sortedMovies = movies.sort((a, b) => b.averageRating - a.averageRating);

// object - movie rating app
// 1.

const movie = {
  title: "The Last Airbender",
  director: "Night Shyamalan",
  releaseYear: 2010,
  genres: ["Action", "Drama", "Adventure", "Sci-Fi", "Thriller"],
  ratings: [9, 10, 7.5, 9.5, 8, 8.5],
};

// Calculate the average rating
const averageRating =
  movie.ratings.reduce((acc, curr) => acc + curr, 0) / movie.ratings.length;

console.log(averageRating);

// 2.

//adding actor and role
movie.cast = [
  {
    name: "Anng",
    role: "Avatar",
  },
  {
    name: "katara",
    role: "WaterBender",
  },
];
console.log(movie.cast[1].name);

// logging the 2nd genres
console.log(movie.genres[1]);
// console.log(movie.actor[1]);

console.log(movie);

// 3.
// change year
movie.releaseYear = 2011;
console.log(movie);
// push rating
movie.ratings.push(5.9);
console.log(movie.ratings);
//  delete  key
delete movie.director;
console.log(movie);
// change role
movie.cast[0].role = "AirBender";
console.log(movie.cast);
//if key is found
if ("ratings" in movie) {
  console.log("ratings is included");
} else {
  ("ratings not found");
}

// 4.

const movies = [
  {
    title: "Inception",
    details: {
      duration: 148,
      rating: "PG-13",
    },
  },
  {
    title: "Interstellar",
    details: {
      duration: 169,
      rating: "PG-13",
    },
  },
];

// console.log(movies[0].details.duration);

const averageDuration =
  movies.reduce((avg, movie) => avg + movie.details.duration, 0) /
  movies.length;

console.log(averageDuration);

// 5.

const movie1 = {
  title: "Inception",
  details: {
    duration: 148,
    rating: "PG-13",
  },
};

const movie2 = {
  title: "Interstellar",
  details: {
    duration: 169,
    rating: "PG-13",
  },
};

// merge object
//idk /////////////////////////////////////////////////////////////////////////////

// prevent new properties  'seal'
Object.seal(movie1);
movie1.noor = "athamny";
console.log(movie1);

//  preventing any further changes.
Object.freeze(movie1);
movie1.title = "noor";
console.log(movie1); // still the same

// id seaed returns true if not falsse
if (Object.isSealed(movie1)) {
  console.log("Object is sealed");
}
// same here
if (Object.isFrozen(movie2)) {
  console.log("Object is Freezed");
} else {
  console.log("Object is Not Freezed");
}

// 6.
console.log("Ex 6 >>>>");
const movieDetails = {
  title: "Inception",
  director: "Christopher Nolan",
  releaseYear: 2010,
  ratings: [8, 9, 9.5, 8.5],
};

for (let movie of Object.keys(movieDetails)) {
  // console.log(movie, movieDetails[movie]);
  console.log(`${movie}: ${movieDetails[movie]}`);
}

// 7.
console.log("Ex 7 >>>>");

const movieCollection = {
  Inception: 5,
  Interstellar: 8.5,
  "The Dark Knight": 9.5,
  Prestige: 8,
};
// title = key / rating = value .....
// 1 loop
// 2 confition if rating < 7
// 3 reasgin the key value if its true
for (let [title, rating] of Object.entries(movieCollection)) {
  if (rating < 7) {
    movieCollection[title] = rating + 1;
  }
}
console.log(movieCollection);

// 8.
console.log("ex 8 >>>>>");

const movies2 = {
  1: { title: "Inception", year: 2010, rating: 9 },
  2: { title: "The Matrix", year: 1999, rating: 8.5 },
  3: { title: "Interstellar", year: 2014, rating: 8.6 },
};
// fisrt convert to an array using the entries
// if year > 2000
//new object ...the movie and prop isNewer set to true
//push to the new array
//log maybe work maybe no who knows!!
function newerRelease(movie2) {
  const newMovies = [];
  for (let [id, movie] of Object.entries(movie2)) {
    // console.log(movie2);
    if (movie.year > 2000) {
      const newRealease = { ...movie, isNewer: true };
      newMovies.push(newRealease);
    }
  }
  return newMovies;
}
console.log(newerRelease(movies2));

// 9.

console.log("Ex 9 >>>>>");

const genreRatings = {
  action: [8, 9, 7, 10, 8.5],
  sciFi: [8.5, 8, 9, 9.5, 7.5],
  drama: [7, 7.5, 8, 8.5, 9],
};

Object.keys(genreRatings).forEach((genre) => {
  // now for each array in side the object will do the reduce callback and save is in a new xonst
  const avg =
    genreRatings[genre].reduce((acc, curr) => acc + curr, 0) /
    genreRatings[genre].length;
  console.log(`${genre} : ${avg}`);
});
// console.log(Object.keys(genreRatings));
// NOTE : i did not undertood how  reduce works but i do understand the steps

// Movie rating System Objects

// 1. Creating the Movie Database

const movieDatabase = {
  title: [],
  rating: [],
};
