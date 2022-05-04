function MovieFilterYear() {
    return <>
        <label htmlFor="Año" className='label'> Año
            <select
                className="input"
                type="text"
                name="Year"
                id="Year"
            //value={ }
            //onChange={}
            >
                <option value="all">Todos</option>

            </select>
        </label>
    </>


}


export default MovieFilterYear;