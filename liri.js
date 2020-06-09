require("dotenv").config();
let keys = require("./keys.js");
let axios = require("axios");
let moment = require("moment");
let Spotify = require("node-spotify-api");
let fs = require("fs");
let spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret,
});
let defaultMovie = "Mr. Nobody";

let action = process.argv[2];
let value = process.argv[3];

//lists concert dates, location and artist function
//date listed as MM/DD/YYYY
function fetchBands(artist) {
    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
    .then(function (response) {
        console.log("Name of the Venue:", response.data[0].venue.name);
        console.log("Venue Location:", response.data[0].venue.city);
        let eventDate = moment(response.data[0].datetime).format('MM/DD/YYYY');
        console.log("Date of the event:", eventDate);
    })
    .catch(function (error) {
        console.log(error);
    });
}

function fetMovies (movieName) {
    axios.get("http://www.omdbapi.com/?apikey=fe749e2c" + movieName)
    .then(function (data) {
        let results = `
         Title of the movie: ${data.data.Title}
         Year the movie came out: ${data.data.Year}
         IMDB Rating of the movie: ${data.data.Rated}
         Rotten Tomatoes Rating of the movie: ${data.data.Rating[1].Value}
         Country where the movie was produced: ${data.data.Country}
         Language of the movie: ${data.data.Language}
         Plot of the movie: ${data.data.PLot}
         Actors in the movie: ${data.data.Actors} `;
         console.log(results)
            })
        .catch(function (error){
            console.log(error);
        });
        if (movieName === "Mr. Nobody") {
            console.log("---------------");
            console.log("If you haven't watched 'Mr. Nobody', then you should: http://www.imdb.com/title/tt0485947/");
            console.log("it's on Netflix!");
        };
}
