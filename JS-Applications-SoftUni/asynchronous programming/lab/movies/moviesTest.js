function loadMovies(){
    let url = 'http://localhost:3030/data/movies';
    let movieList = document.querySelector('#movie-list');
    document.querySelector('#load-button').addEventListener('click',()=>{
        movieList.innerHTML = '';
        fetch(url)
            .then((responce)=>{
                responce.json().then((movies)=>{
                    for (const movie of movies) {
                        let li = document.createElement('li');
                        li.textContent = movie.title;
                        movieList.appendChild(li)
                    }
                })
        })
    });
}

loadMovies();
