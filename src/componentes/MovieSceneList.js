import MovieSceneItem from "./MovieSceneItem";

function MovieSceneList(props) {
    const smsHTML = () => {
        let html = '';
        if () {

        }
        else {

        }
    }
    //Necesito transformar un array de datos  en un array de Li
    const movieElements = props.movies.map((item, index) => {
        return (
            <li key={index} className="card_movie">

                <MovieSceneItem item={item} />

            </li>
        )
    });

    return (

        <ul className="list_card">
            {movieElements}
        </ul>
    );

}
export default MovieSceneList;