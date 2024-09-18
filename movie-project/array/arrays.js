const movies = [
  {
    title: "The Shawshank Redemption",
    rating: 9.3,
    votes: 2337890,
    genre: ["Drama"],
    year: 1994,
  },
  {
    title: "The Godfather",
    rating: 9.2,
    votes: 1603867,
    genre: ["Crime", "Drama"],
    year: 1972,
  },
  {
    title: "The Godfather: Part II",
    rating: 9.0,
    votes: 1123155,
    genre: ["Crime", "Drama"],
    year: 1974,
  },
  {
    title: "The Dark Knight",
    rating: 9.0,
    votes: 2273490,
    genre: ["Action", "Crime", "Drama"],
    year: 2008,
  },
  {
    title: "12 Angry Men",
    rating: 9.0,
    votes: 686888,
    genre: ["Crime", "Drama"],
    year: 1957,
  },
];

movies.map((mov) => console.log(mov.title));

// 2. Highly Rated Movies

// function movieU9(num) {
//   let movieUpove9 = [];
//   movieUpove9 = movies.filter((movie) => {
//     if (movie.rating >= num) {
//       movieUpove9.push(`${movie.title}: ${movie.rating}`);
//       //   console.log(`${movie.title}: ${movie.rating}`);
//     }
//   });
//   console.log(movieUpove9);
// }

function movieU9(num) {
  const movieUpove9 = movies.filter((movie) => movie.rating >= num);
  const result = movieUpove9.map((movie) => `${movie.title}: ${movie.rating}`);
  console.log(result);
}

movieU9(9.1);

// 3. Total Votes Count

const voteCount = movies
  .map((vote) => vote.votes)
  .reduce((acc, curr) => acc + curr, 0);

console.log(voteCount);

// 4.

const movieTitleRating = movies.map((mov) => `${mov.title} - ${mov.rating} `);
console.log(movieTitleRating);

// 5.

const updateRating = function (title, rating) {
  // check if title === title
  const newRating = movies.map((movie) => {
    if (movie.title === title) {
      return { ...movie, rating: rating };
    }
    return movie;
  });
  return newRating;
};

console.log(updateRating("The Dark Knight", 10));

// 6.

const dramaMovies = function (genre) {
  const newGenre = movies.filter((movie) => movie.genre.includes(genre));

  return newGenre;
};

console.log(dramaMovies("Action"));

// 7.
//  map sort (find, find indexof) filter

const yearMovies = function (year) {
  const afterYear = movies.filter((movie) => {
    if (movie.year > year) {
      return movie;
    }
  });
  return afterYear;
  //   return console.log("There are no movies");
};

console.log(yearMovies(2000));

// 8.

const calcAvg = function () {
  //collect the rating in one sum

  let result = 0;
  // loop and accsess the ratings
  for (let mov of movies) {
    const ratings = mov.rating;
    result += ratings / movies.length;
  }
  console.log(result);
};

calcAvg();

// 9.

const sorted = movies.sort((a, b) => b.votes - a.votes);

console.log(sorted);
