import MovieFilterName from "./MovieFilterName";
import MovieFilterYear from "./MovieFilterYear";


function Filters(props) {
    return <form>
        <MovieFilterYear />
        <MovieFilterName FilterNameFunction={props.FilterNameFunction} />
    </form>
}
export default Filters;