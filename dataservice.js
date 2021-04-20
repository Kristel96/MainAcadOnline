const urlBase = 'https://api.themoviedb.org/3';
const urlMovie = '/movie/popular?api_key=';
const apiKey = '3bcb757b3ebe4adeeb1c3a7d2a3c4dcc';
const urlSearch = '/search/movie?api_key='
const query = '&query=';

const fullgetMovieUrl = urlBase+urlMovie+apiKey;
const seachMovieUrl = urlBase+urlSearch+apiKey+query;

export function getMovies(callback){
    fetch(fullgetMovieUrl)
        .then(result => result.json())
        .then(result =>  callback(result.results))
        .catch(error => alert(error));
}
export function searchMovie(movie, callback){
    fetch(seachMovieUrl+movie)
        .then(result => result.json())
        .then(result =>  callback(result))
}
//
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=dghjhfgj&page=1&include_adult=false
// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
