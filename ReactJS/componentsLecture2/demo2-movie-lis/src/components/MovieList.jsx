import MovieListItem from "./MovieListItem"
export default function MovieList(props) {
    return (
       <>
       <div>
       <h3>Movie List</h3>
       <ul>
        <MovieListItem movie={props.movies[0].title} />
        <MovieListItem movie={props.movies[1].title} />
        <MovieListItem movie={props.movies[2].title} />
        <MovieListItem movie={props.movies[4].title} />
       </ul>
       </div>
       </>
    )
}