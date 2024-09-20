// 1.
const movies = ["Inception", "The Matrix", "Interstellar"];

function countMovies(movies) {
  if (movies.length === 0) {
    return 0;
  }
  return 1 + countMovies(movies.slice(1));
}
console.log(countMovies(movies)); //3

// slice(1) means that each time slice and create new array till we reach the base case which is length of 0 on the array....

const movies2 = [
  ["Inception", "The Matrix"],
  ["Interstellar", "Dunkirk"],
];

// function findMovie(arr, title) {
//     for (let movie of arr) {
//       if (movie === title) {
//         return true;
//       }
//       if (Array.isArray(movie)) {
//         for (let nestedMovie of movie) {
//           if (nestedMovie === title) {
//             return true;
//           }
//         }
//       }
//     }
//     return false;
//   }

// if Incption is inclouded return true....
const findMoive = function (arr, title) {
  for (let movie of arr) {
    // if the movie title in the main array..true
    if (movie === title) {
      return true;
    }
    // if the movie title in the a nested array by recall the function..true
    if (Array.isArray(movie)) {
      // recall the function  using if... (so the loop work on the nested arrays)
      if (findMoive(movie, title)) {
        return true;
      }
    }
  }
  return false;
};

console.log(findMoive(movies2, "Inception"));
