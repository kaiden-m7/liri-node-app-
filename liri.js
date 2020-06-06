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
