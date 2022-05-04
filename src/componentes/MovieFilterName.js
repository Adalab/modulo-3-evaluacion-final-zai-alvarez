function MovieFilterName(props) {
    const handleInputName = (ev) => {
        props.FilterNameFunction(ev.target.value);
    };
    return <>
        <label htmlFor="Nombre de la Película" className='label'>Movie
            <input
                className="input"
                type="text"
                name="Movie"
                id="Movie"
                value={props.filterMovieName}
                onChange={handleInputName}
            />
        </label></>
}
export default MovieFilterName;