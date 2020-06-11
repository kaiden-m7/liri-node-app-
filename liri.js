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

function runLiri (action, value){
switch (action) {
    case "concert-this":
        fetchBands(value)
        break;
    case "spotify-this-song":
        fetchSongs(value)
        break;
    case "movie-this":
        if (value === "") {
            value = defaultMovie
        }
        fetchMovies(value)
        break;
    case "do-what-it-says":
        doWhatItSays()
        break;
    default:
        break;
}
}
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

//grabs movie info and fills in data with results 
function fetchMovies(movieName) {
    let movieUrl = "https://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy"
    axios.get(movieUrl)
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
        .catch(function (error) {
            console.log(error);
        });
    if (movieName === "Mr. Nobody") {
        console.log("---------------");
        console.log("If you haven't watched 'Mr. Nobody', then you should: http://www.imdb.com/title/tt0485947/");
        console.log("It's on Netflix!");
    };
}

//grabs songs and shows info, if no song searched defult will be 'i saw the sign' by Ace of Base
function fetchSongs(songName) {
    if (songName === "") {
        songName = "I Saw the Sign";
    }
    spotify.search({ type: 'track', query: songName }, function (err, data) {
        if (err) {
            return console.log("error occurred: " + err);
        }
        //lists artists of song
        console.log("Artists: ", data.tracks.items[0].album.artist[0].name);
        //shows preview link to song
        console.log("Preview Link: ", data.tracks.item[0].preview_url);
        //lists the album the song if from 
        console.log("Album Name: ", data.tracks.item[0].album.name);
    });
}


function doWhatItSays() {
    fs.readFile("random.txt", "utf8", function (err, data) {
        data = data.split(",");
        let action = data[0]
        let value = data[1]

        switch (action) {
            case "concert-this":
                fetchBands(value)
                break;
            case "spotify-this-song":
                fetchSongs(value)
                break;
            case "movie-this":
                fetchMovies(value)
                break;
        }
    });
}

runLiri(action, value);