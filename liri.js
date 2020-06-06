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


