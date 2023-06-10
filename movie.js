class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }


    // Static method of getPg  --> Where it can be accessed without creating the object.
    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Creating an instance of the Movie class
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

console.log(casinoRoyale);

// Creating an array of Movie instances
const movies = [
    new Movie("Movie 1", "Studio 1", "PG"),
    new Movie("Movie 2", "Studio 2", "R"),
    new Movie("Movie 3", "Studio 3", "PG"),
    new Movie("Movie 4", "Studio 4", "PG-13"),
    new Movie("Movie 5", "Studio 5", "PG"),
];

// Getting an array of movies with a rating of "PG"
const pgMovies = Movie.getPG(movies);
console.log(pgMovies);

