import {getMovies} from './dataservice.js'

let imgBaseServer = 'https://image.tmdb.org/t/p/w300/';
let urlBase = 'https://api.themoviedb.org/3/movie/popular?api_key=';
let apiKey = '3bcb757b3ebe4adeeb1c3a7d2a3c4dcc';


const fullUrl = urlBase+apiKey;
window.onload = function() {
getMovies(fullUrl, createFilmsList);

}
function createFilmsList(filmArray){
    console.log(filmArray);
    let container = document.getElementById('mainCont');
    filmArray.forEach((item, index)=>{
    let poster = document.createElement('img');
    let filmWrapper = document.createElement('div');
    filmWrapper.className = "film-wrapper";
    poster.src = imgBaseServer+item.poster_path;
    filmWrapper.append(poster);
    container.append(filmWrapper);
    })
}
