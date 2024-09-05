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

// 3.
