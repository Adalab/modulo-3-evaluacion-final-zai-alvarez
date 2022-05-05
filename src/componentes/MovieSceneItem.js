
const SceneItem = (props) => {
    return (
        <>

            <img className="poster"
                src={props.movie.poster}
                alt={props.movie.movie} />

            <div className="container_title">
                <h3>{`${props.movie.movie}-${props.movie.year}`}</h3>

                <h4>{props.movie.full_line}</h4>
            </div>
        </>
    );
};

export default SceneItem;