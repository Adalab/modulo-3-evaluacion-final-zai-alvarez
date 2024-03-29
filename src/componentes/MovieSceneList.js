import MovieSceneItem from "./MovieSceneItem";



function MovieSceneList(props) {

    //Necesito transformar un array de datos  en un array de Li
    const movieElements = props.movies.map((item, index) => {
        return (
            <li key={index} className="card_movie">

                <MovieSceneItem item={item} />

            </li>
        )
    });

    return (props.movies.length === 0 ? <span>
        No hemos podido encontrar tu película, inténtelo de nuevo.
    </span> :

        <ul className="list_card">
            {movieElements}
        </ul>
    );

}
export default MovieSceneList;