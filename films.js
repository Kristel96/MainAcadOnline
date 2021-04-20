import {getMovies, searchMovie} from './dataservice.js'

let imgBaseServer = 'https://image.tmdb.org/t/p/w300/';
window.onload = function() {
    getMovies(createFilmsList);
}
///ДЗ стоврити клас для фільмів і пацювати з екземпляром класу=>
let container = document.getElementById('mainCont');


function createFilmsList(filmArray){
    console.log(filmArray);
    filmArray.forEach((item, index)=> {
    let leftBlock = document.createElement('div');
        leftBlock.className = 'leftblock';
    let rightBlock = document.createElement('div');
        rightBlock.className = 'rightblock';


    let poster = document.createElement('img');
    poster.className = 'filmPoster';

    let title =   document.createElement('h3');
    title.className = 'filmTitle';
    title.innerText = item.original_title;

    let desc = document.createElement('p');
        desc.innerText = item.overview;
        rightBlock.append(desc);

    let filmWrapper = document.createElement('div');
    filmWrapper.className = "film-wrapper";
    poster.src = imgBaseServer+item.poster_path;

        leftBlock.append(poster);
        leftBlock.append(title);

        filmWrapper.append(leftBlock);
        filmWrapper.append(rightBlock);

    container.append(filmWrapper);
    })
}

document.getElementById('searchFilm').onclick = function (){
   let searchQuery = document.getElementById('search').value;
    searchMovie(searchQuery,showSearch);
}



function showSearch(response){
    container.innerHTML = '';
    createFilmsList(response.results)
}

// adult: false
// backdrop_path: "/inJjDhCjfhh3RtrJWBmmDqeuSYC.jpg"
// genre_ids: (2) [28, 878]
// id: 399566
// original_language: "en"
// original_title: "Godzilla vs. Kong"
// overview: "In a time when monsters walk the Earth, humanity’s fight for its future sets Godzilla and Kong on a collision course that will see the two most powerful forces of nature on the planet collide in a spectacular battle for the ages."
// popularity: 6159.271
// poster_path: "/pgqgaUx1cJb5oZQQ5v0tNARCeBp.jpg"
// release_date: "2021-03-24"
// title: "Godzilla vs. Kong"
// video: false
// vote_average: 8.3
// vote_count: 4676
