//   x-Crear la estrucutra
//   x-Crear el listado de películas
//    -Filtrar por película
//    -Filtrar por año
//    -Crear componentes
//    -Hacer clic en una tarjeta y que aparezca en pantalla completa
//    -Detalles de calidad: etiquetas form, texto si no es encuentra película, mayúsulas y minúsculas...

import '../styles/App.scss';
import getListApi from '../services/GetListApi';
import { useEffect, useState } from 'react';
import Form from "./Form";
import MovieList from "./MovieList"

function App() {
  //Creo mi variable de estado con un array vacio
  const [dataList, setList] = useState([]);

  //Para que se ejecute una sola vez cuand cargue la página
  useEffect(() => {
    getListApi().then((dataClean) => {
      console.log(dataClean);
      setList(dataClean);
    })
  }, [])

  return (
    <div className="App">
      <header>
        <h1 className='title'>owen wilson's "wow"</h1>
      </header>
      <main>
        <Form />
      </main>

      <MovieList movies={dataList} />
    </div >
  );
}

export default App;
