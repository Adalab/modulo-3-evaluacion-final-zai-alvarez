
const MovieSceneDetail = (props) => {

    return (
        <div className="container_scene">
            <section>

                <img
                    className=""
                    src={props.item.poster}
                    alt=""
                />
            </section>

            <section>

                <h2>{props.item.movie}</h2>
                <p>{props.item.full_line}</p>
                <p>{props.item.director}</p>

            </section>

        </div>
    );
};

export default MovieSceneDetail;