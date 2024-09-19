// 1. Creating the Movie Database
console.log("**************Creating the Movie Database***********");
const movieDatabase = {
  movies: [
    {
      title: "",
      ratings: [],
      averageRating: 0,
    },
  ],
  // 1.3 add movie titke
  // 1.3 add movie titke
  addMovie(title) {
    const newMovie = {
      title: title.trim(),
      ratings: [],
      averageRating: 0,
    };
    this.movies.push(newMovie);
  },
  // 1.4 remove movie titke

  removeMovie(title) {
    this.movies = this.movies.filter((movie) => movie.title !== title);
  },
  // 2.1 add ratings
  addRatings(title, ratings) {
    const movie = this.movies.find((movie) => movie.title === title);
    if (movie) movie.ratings.push(...ratings);
    this.calculateAverageRating(title);
  },
  // 2.2 remove rating
  removeRating(title, ratings) {
    const movie = this.movies.find((movie) => movie.title === title);
    if (movie) {
      movie.ratings = movie.ratings.filter((r) => r !== ratings);
    }
    this.calculateAverageRating(title);
  },
  //3.1 Calculating Average Ratings
  calculateAverageRating(title) {
    const movie = this.movies.find((movie) => movie.title === title);
    if (movie) {
      movie.averageRating =
        movie.ratings.reduce((acc, curr) => acc + curr) / movie.ratings.length;
    }
  },
  searchMovie(title) {
    return this.movies.filter((movie) =>
      movie.title.toLowerCase().includes(title.toLowerCase())
    );
  },

  // sortMovieByRating() {
  //   this.movies.sort((a, b) => {
  //     if (b.averageRating !== a.averageRating) {
  //       return b.averageRating - a.averageRating;
  //     }
  //     if (b.averageRating === a.averageRating) {
  //       return a.title > b.title ? 1 : -1;
  //     }
  //   });
  // },
};

movieDatabase.addMovie("Avatar");
movieDatabase.addMovie("Inception ");
movieDatabase.addMovie("The Godfather");
movieDatabase.addMovie("The sad");
movieDatabase.addMovie("Ninga War");

console.log(movieDatabase);
movieDatabase.removeMovie("Avatar");
console.log(movieDatabase.movies);
movieDatabase.addRatings("Inception", [9.2, 8, 7, 4, 2, 8]);
movieDatabase.addRatings("The Godfather", [8.4, 9, 7, 8, 9, 10]);
movieDatabase.addRatings("The sad", [9.2, 8, 7, 4, 2, 8]);
movieDatabase.addRatings("Ninga War", [8.4, 9, 7, 8, 9, 10]);
console.log(movieDatabase.movies);

// 2. Adding and Removing Ratings

console.log("***************Adding and Removing Ratings************");
movieDatabase.removeRating("Inception", 8);
console.log(movieDatabase.movies);
movieDatabase.calculateAverageRating("Ninga War");
console.log(movieDatabase.movies);
console.log(movieDatabase.searchMovie("inception"));

// 5. i will do the sort later cuz i dont realy understand it 100%

console.log(movieDatabase.movies);

// movieDatabase.sortMovieByRating();
