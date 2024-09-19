// 1.
// plan as movietheater entity

class MovieTheater {
  constructor(numOfSeats) {
    this.listOfMovies = [];
    this.numOfSeats = numOfSeats;
    this.bookedSeats = [];
    this.movie = [];
  }

  //add
  addMovie(movie) {
    this.listOfMovies.push(movie);
  }
  //remove
  removeMovie(movieTitle) {
    this.listOfMovies = this.listOfMovies.filter(
      (movie) => movie.title !== movieTitle
    );
  }
  //book
  bookSeat(seatNumber) {
    // steps === if valid / booked / successfully booked
    if (seatNumber > this.numOfSeats || seatNumber < 1) {
      console.log("Invalid Seat Number.");
      return;
    }
    if (this.bookedSeats.includes(seatNumber)) {
      console.log(`Seat Numver ${seatNumber} is booked.`);
    } else {
      this.bookedSeats.push(seatNumber);
      console.log(`${seatNumber} is booked successfully.`);
    }
  }

  // calcrev
  calculateRevenue() {
    const total = this.bookedSeats.length * this.ticktPrice;
    return total;
  }

  // list movie
  listMovies() {
    const currPlaying = this.listOfMovies.map((movie) => movie);
    return currPlaying;
  }
  // find movie
  findMovieByTitle(title) {
    const movie = this.listOfMovies.find((movie) => movie.title === title);
    return movie;
  }
}

class Movie {
  constructor(title, duration, ticketPrice) {
    this.title = title;
    this.duration = duration;
    this.ticketPrice = ticketPrice;
  }
  // info about moive console.log
  getInfo() {
    console.log(
      `Title: ${this.title}, Duration: ${this.duration}, TicketPrice: ${this.ticketPrice}`
    );
  }
  //calcavg rev
  calculateRevenue(bookedSeats) {
    const revenue = bookedSeats * this.ticketPrice;
    console.log(`${bookedSeats}: ${revenue}`);
    return revenue;
  }
  updateTicketPrice(newPrice) {
    this.ticketPrice = newPrice;
    console.log(`Ticket Price: ${newPrice}`);
  }
}

class Seat {
  constructor(seatNum, row, status) {
    this.seatNum = seatNum;
    this.row = row;
    this.status = status;
  }
  // add a value of true of false if the seat in taken....
  isOccupied() {
    return this.status === "booked";
  }
  //book
  book() {
    if (this.isOccupied()) {
      console.log(`this seat: ${this.row} ${this.seatNum} is booked.`);
    } else {
      console.log(`Seat: ${this.row} ${this.seatNum} booked seccessfuly`);
    }
  }

  // change seat status
  changeSeatStatus(status) {
    this.status = status;
  }
}

// class RevenueCalculator {
//   constructor() {
//     this.movies = [];
//   }
//   //calc totla
//   calculateTotalRevenue() {

//     let totalRevenue = 0;
//     this.movies.forEach((movie) => {
//       totalRevenue += movie.calculateRevenue(movie.seatsBooked || 0);
//     });
//   }
// }
const threater1 = new MovieTheater();
const movie1 = new Movie("Inception", 148, 12);
const movie2 = new Movie("hulk", 96, 12);
threater1.addMovie(movie1);
threater1.addMovie(movie2);
console.log(threater1);
