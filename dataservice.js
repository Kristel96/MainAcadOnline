
export function getMovies(fullUrl,callback){
    fetch(fullUrl)
        .then(result => result.json())
        .then(result =>  callback(result.results))
        .catch(error => alert(error));
}
