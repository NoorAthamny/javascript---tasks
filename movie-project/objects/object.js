// 1. Creating the Movie Database
console.log("**************Creating the Movie Database***********");
const movieDatabase = {
  movies: [
    {
      title: "",
      ratings: [],
      averageRating: [],
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
    const remove = {
      title: title,
      ratings: [],
      averageRating: 0,
    };
    this.movies.pop(remove);
  },
  // 2.1 add ratings
  addRating(title, rating) {
    for (let mov of this.movies) {
      if (mov.title === title) {
        mov.ratings.push(rating);

        return;
      }
    }

    console.log(`${title}: IS NOT A MOVIE`);
  },
  // 2.2 remove rating
  removeRating(title, rating) {},
};

movieDatabase.addMovie("Avatar");
movieDatabase.addMovie("Inception ");
movieDatabase.addMovie("The Godfather");
movieDatabase.addMovie("The sad");
movieDatabase.addMovie("Ninga War");

console.log(movieDatabase);

movieDatabase.removeMovie("Avatar");
console.log(movieDatabase.movies);
movieDatabase.addRating("Inception", 9.2);
movieDatabase.addRating("The Godfather", 10);
movieDatabase.addRating("The sad", 4.4);
movieDatabase.addRating("Ninga War", 8.4);

// 2. Adding and Removing Ratings

console.log("***************Adding and Removing Ratings************");
