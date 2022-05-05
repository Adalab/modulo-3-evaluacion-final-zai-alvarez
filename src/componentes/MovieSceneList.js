import MuvieSceneItem from "./MovieSceneItem";
function MovieSceneList(props) {
    //Necesito transformar un array de datos  en un array de Li
    const movieElements = props.movies.map((item, index) => {
        return (
            <li key={index} className="card_movie">

                {/*<MuvieSceneItem />*/}

                <img className="poster" src={item.poster} alt="" />
                <div className="container_title">
                    <h3>{item.movie}-{item.year}</h3>

                    <h4>{item.full_line}</h4>
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
export default MovieSceneList;