import { Link } from 'react-router-dom';
function MovieSceneItem(props) {
    return (
        <Link to={`/movie/${props.item.id}`}>
            <img
                className="img"
                src={props.item.poster}
                alt={props.item.movie}

            />
            <div className="container_title">
                <h3 className='title_movie'>{props.item.movie} - {props.item.year}</h3>

                <h4 className='quote'>{props.item.full_line}</h4>
            </div>
        </Link>
    );
};

export default MovieSceneItem;