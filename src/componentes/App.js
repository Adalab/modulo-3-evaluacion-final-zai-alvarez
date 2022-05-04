//    -Crear la estrucutra
//  x -Crear el listado de películas
//    -Filtrar por película
//    -Filtrar por año
//    -Crear componentes
//    -Hacer clic en una tarjeta y que aparezca en pantalla completa
//    -Detalles de calidad: etiquetas form, texto si no es encuentra película, mayúsulas y minúsculas...

import '../styles/App.scss';
import getWowList from '../services/WowListApi';
import { useEffect, useState } from 'react';

function App() {
  //Creo mi variable de estado con un array vacio
  const [dataWowList, setWowList] = useState([]);

  //Para que se ejecute una sola vez cuand cargue la página
  useEffect(() => {
    getWowList().then((dataCleanWow) => {
      console.log(dataCleanWow);
      setWowList(dataCleanWow);
    })
  }, [])

  return (
    <div className="App">
      <form action="">
        <h1 className='title'>owen wilson's "wow"</h1>
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
    </div >
  );
}

export default App;
