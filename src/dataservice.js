const urlBase = 'https://api.themoviedb.org/3';
const urlMovie = '/movie/popular?api_key=';
const apiKey = '3bcb757b3ebe4adeeb1c3a7d2a3c4dcc';
const accesToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmNiNzU3YjNlYmU0YWRlZWIxYzNhN2QyYTNjNGRjYyIsInN1YiI6IjVkMzk5OWRhYWI2ODQ5MTA1YjhhOTZiNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FRBWe0HGh-bOSXRKJy0FOe4rjW8G-bIgPxFWLQq3q1s';

const urlSearch = '/search/movie?api_key=';
const urlRequestToken = '/authentication/token/new?api_key=';
const urlSession = '/authentication/token/validate_with_login?api_key=';
const query = '&query=';

const fullgetMovieUrl = urlBase+urlMovie+apiKey;
const seachMovieUrl = urlBase+urlSearch+apiKey+query;
const requestTokenUrl = urlBase+urlRequestToken+ apiKey;
const sesionIdTokenUrl = urlBase+urlSession+apiKey;


// https://api.themoviedb.org/3/authentication/token/new?api_key=<<api_key>>
//https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=<<api_key>>


//https://api.themoviedb.org/3/authentication/session/new?api_key=<<api_key>>

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

export function getRequestToken(uname, psw, callback){
    fetch(requestTokenUrl)
        .then(result=>result.json())
        .then(result=> callback(uname, psw, result.request_token));
}
export function validateWithLogin(username, pasw, reqToken){
    let req = {
        username:username,
        password:pasw,
        request_token: reqToken
    };
    let response ={};
    fetch(sesionIdTokenUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req)
    })
        .then(result=>result.json())
        .then(result=> createSession(result.request_token));

}
 function createSession(requestToken){
    let req ={
        request_token: requestToken
    };

     fetch('https://api.themoviedb.org/3/authentication/session/new?api_key=3bcb757b3ebe4adeeb1c3a7d2a3c4dcc', {
         method: 'POST',
         headers: {
             'Content-Type': 'application/json'
         },
         body: JSON.stringify(req)
     }).then(result=>result.json())
         .then(result=> console.log(result));
}
export function getAccess(){
   let req =  {
        access_token: accesToken,
    };
    fetch('https://api.themoviedb.org/3/authentication/session/convert/4?api_key=3bcb757b3ebe4adeeb1c3a7d2a3c4dcc', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(req)
    })
        .then(result=>result.json())
        .then(result=> console.log(result));
}
//
// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=dghjhfgj&page=1&include_adult=false
// https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
