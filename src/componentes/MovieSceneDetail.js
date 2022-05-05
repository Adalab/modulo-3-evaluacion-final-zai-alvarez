
const MovieSceneDetail = (props) => {
    return (
        <div className="container_scene">
            <section>

                <img
                    className=""
                    src={props.scene.poster}
                    alt=""
                />
            </section>

            <section>

                <h2>{props.scene.movie}</h2>
                <p>{props.scene.full_line}</p>
                <p>{props.scene.director}</p>

            </section>

        </div>
    );
};

export default MovieSceneDetail;