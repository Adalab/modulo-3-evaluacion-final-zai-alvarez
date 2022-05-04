function Form() {
    return (
        <form action="">

            <div className='container_input'>
                <label htmlFor="Movie" className='label'>Movie
                    <input
                        className="input"
                        type="text"
                        name="Movie"
                        id="Movie"
                    //value={ }
                    //onChange={ }
                    />
                </label>

                <label htmlFor="Year" className='label'> Year
                    <select
                        className="input"
                        type="text"
                        name="Year"
                        id="Year"
                    //value={ }
                    //onChange={ } 
                    >
                        <option value="all">Todos</option>

                    </select>
                </label>
            </div>
        </form>
    )
}
export default Form;