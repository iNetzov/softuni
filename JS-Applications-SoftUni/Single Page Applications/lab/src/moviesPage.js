let moviesSection = document.querySelector('.movies');

 function showPage() {
    moviesSection.classList.remove('hidden');
    fetchMovies();
}

function fetchMovies(){
    fetch('http://localhost:3030/data/movies').then(res=>res.json()).then(renderMovies)
}
function renderMovies(movies){
    let movieTemp = moviesSection.querySelector('#movie-card-template');
    let movieListElement = document.querySelector('.movie-list');
    movieListElement.style.display = 'flex';
    movieListElement.innerHTML ='';
    for (const movie of movies) {
        console.log(movie);
        let currentElement = movieTemp.cloneNode(true);
        currentElement.classList.remove('hidden');
        currentElement.removeAttribute('id');

        let titleElement = currentElement.querySelector('.card-title');
        titleElement.textContent = movie.title;
        let descriptionElement = currentElement.querySelector('.card-text');
        descriptionElement.textContent = movie.description;

        movieListElement.appendChild(currentElement);
    }
    moviesSection.appendChild(movieListElement);
}



function hidePage(){
    moviesSection.classList.add('hidden');
}

export default {
    showPage,
    hidePage
}
