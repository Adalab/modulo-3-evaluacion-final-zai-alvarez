

const MovieSceneDetail = (props) => {
    console.log(props)
    return (
        <div className="container_scene">


            <section className="list_card">

                <img
                    className="poster"
                    src={props.sceneFound.poster}
                    alt={props.sceneFound.name}

                />
            </section>

            <section>

                <h2>{props.sceneFound.movie}</h2>
                <p>{props.sceneFound.full_line}</p>
                <p>{props.sceneFound.director}</p>

            </section>

        </div>
    );
};

export default MovieSceneDetail;