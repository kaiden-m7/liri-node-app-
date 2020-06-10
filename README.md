## Liri-Bot-App 

**Liri** is a Language Interpretation interface. 

## Overview
-----------------
Liri is a command line node app that take in parameters and returns data to the user. Liri is similar to IPhone's Siri; however, Siri using Speech Interpreation and sound whereas Liri is a *Language Interpreation* of user input to data. 

## Commands
----------
Commands that are used in the Liri Bot App in Node JS are the following: <br>
`concert-this`<br>
`spotify-this-song`<br>
`moive-this`<br>
`do-what-it-says`

## Resorces 
------
**Github** - files/repository<br>
**Visual Studio Code(VSC)** - code/file editor<br>
**Node.js**<br>
**NPM Packages**
* Axios
* Node-Spotify-API
* Moment 
* DotEnv<br>

**API's Used**
* Spotify API<br>
* OMDB<br>
* Bands in Town<br>

## What the commands will do
-----
**Liri** will use **OMDB** to search movies, **Spotify** to search for songs, and **Bands in Town** to look for concerts. 

1. `concert-this '<artist/band name here>'`
- Searches for concert of Artist/Band searched
    - Lists Venue name
    - Lists loaction and date of event using MM/DD/YYYY formatting

2. `spotify-this-song '<song name here>'`
- Displays information about the song 
    - Artist(s)
    - Song Title
    - Title of album
    - A link to the song searched 
- If not song is written to search, node will default to "The Sign" by Ace of Base

3. `movie-this '<movie name here>'`
- Search movie and returns listed information:
    - Title
    - Year moive was released
    - IMDB Rating 
    - Rotten Tomatoes Rating 
    - Country where the movie was produced 
    - Language(s)
    - Plot of the moive 
    - Actors in the movie
- If no movie is searched, node will default to "Mr. Nobody" with a link to the movie, informing user it is on Netflix

4. `do-what-it-says`
- Runs `spotify-this-song` for "I want it that way"


## Author<br>
-------
Kaiden Munsey <br>
[Link to Github Profile](https://github.com/kaiden-m7)




