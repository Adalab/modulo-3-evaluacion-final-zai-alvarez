import MovieFilterName from "./MovieFilterName";
import MovieFilterYear from "./MovieFilterYear";



function Filters(props) {
    return <form className="form">

        <MovieFilterName
            FilterNameFunction={props.FilterNameFunction} />
        <MovieFilterYear
            FilterYearFunction={props.FilterYearFunction}
            getYears={props.getYears} />

    </form>
}
export default Filters;