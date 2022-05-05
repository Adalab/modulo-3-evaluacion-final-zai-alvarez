
function MovieList(props) {
    //Necesito transformar un array de datos  en un array de Li
    const movieElements = props.movies.map((movie, index) => {
        return (
            <li key={index} className="card_movie">

                <img className="poster" src={movie.poster} alt="" />
                <div className="container_title">
                    <h3>{movie.movie}-{movie.year}</h3>

                    <h4>{movie.full_line}</h4>
                </div>
            </li>
        )
    });
    return (
        <ul className="list_card">
            {movieElements}
        </ul>
    );

}
export default MovieList;