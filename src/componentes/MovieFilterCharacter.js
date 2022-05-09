function MovieFilterCharacter(props) {
    const handleCharacter = (ev) => {
        props.FilterCharacterFuncion(ev.target.value)
    }
    return <>
        <label htmlFor="">filtrar por personaje
        </label>
        <input
            type="text"
            name="character"
            value={props.filterMovieCharacter}
            onChange={handleCharacter}

        />

    </>
}
export default MovieFilterCharacter;