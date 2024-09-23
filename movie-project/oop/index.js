// 1.1 meda class

class Media {
  #title;
  #duration;
  #ratings;
  constructor(title, duration) {
    this.#title = title;
    this.#duration = duration;
    this.#ratings = [];
  }
  // 1.3 get titke
  get title() {
    return this.#title;
  }

  // 1.3 get duration
  get duration() {
    return this.#duration;
  }

  //   1.4 push to the ratings array
  addRatings(rating) {
    this.#ratings.push(rating);
  }
  // 1.5
  // 1- create private method using #
  // 2- use reduce to calc avg in a sum then retuen the sum / length
  // 3- use get to accsess the data or get the data " maybe not sure "

  #calcAvg() {
    if (this.#ratings.length === 0) {
      console.log("There is no ratings yet");
    }
    const sum = this.#ratings.reduce((acc, curr) => acc + curr);
    const avg = sum / this.#ratings.length;
    return Math.floor(avg * 10) / 10;
  }
  get calcAverage() {
    return this.#calcAvg;
  }

  displayDetails() {
    return ` Title is:${this.#title} , With a duration of:${
      this.#duration
    }, And Average rating of: ${this.calcAverage()} `;
  }
}

const movie1 = new Media("Avatar", 95);

movie1.addRatings(10);
movie1.addRatings(9);
movie1.addRatings(8.9);
movie1.addRatings(8);
movie1.addRatings(9.6);

console.log(movie1.displayDetails());

// ex.2

class Movie extends Media {
  #director;
  #genre;
  constructor(title, duration, director, genre) {
    super(title, duration);
    this.#director = director;
    this.#genre = genre;
  }

  get director() {
    return this.#director;
  }

  get genre() {
    return this.#genre;
  }
  //override
  displayDetails() {
    return `${super.displayDetails()}, The Director is ${
      this.director
    }, Genres: ${this.genre}`;
  }
}

class Series extends Media {
  #seasons;
  constructor(title, duration, seasons) {
    super(title, duration);
    this.#seasons = seasons;
  }
  get seasons() {
    return this.#seasons;
  }

  displayDetails() {
    return `${super.displayDetails()}, With Seasons of: ${this.seasons}`;
  }
}

const movieSeries = new Series("Hulk", 140, 6);
movieSeries.addRatings(9);
movieSeries.addRatings(6);
movieSeries.addRatings(10);
console.log(movieSeries.displayDetails());
