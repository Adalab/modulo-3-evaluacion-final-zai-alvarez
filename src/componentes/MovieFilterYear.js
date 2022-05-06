function MovieFilterYear(props) {

    const handleSelectYear = (ev) => {
        props.FilterYearFunction(ev.target.value);

    };
    const selectOptionsYear = () => {
        return props.getYears.map((uniqueYear, index) => {
            return (
                <option key={index} value={uniqueYear}>{uniqueYear}</option>
            )
        });
    };

    return <>
        <label htmlFor="Year" className='label'> Año</label>
        <select
            className="input"
            name="YearFilter"
            id="YearFilter"
            value={props.filterMovieYear}
            onChange={handleSelectYear}
        >
            <option value="all">Todos</option>
            {selectOptionsYear()}

        </select>

    </>

}



export default MovieFilterYear;