import MovieFilterCharacter from "./MovieFilterCharacter";
import MovieFilterName from "./MovieFilterName";
import MovieFilterYear from "./MovieFilterYear";




function Filters(props) {
    return <form className="form">

        <MovieFilterName
            FilterNameFunction={props.FilterNameFunction} />
        <MovieFilterYear
            FilterYearFunction={props.FilterYearFunction}
            getYears={props.getYears} />
        <MovieFilterCharacter FilterCharacterFuncion={props.FilterCharacterFuncion}
            filterMovieChacarater={props.filterMovieChacarter}
        />


    </form>
}
export default Filters;