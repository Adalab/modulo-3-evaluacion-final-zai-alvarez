//   x-Crear la estrucutra
//   x-Crear el listado de películas
//   x-Filtrar por película
//   x-Filtrar por año
//   x-Crear componentes
//        x -MovieSceneList
//        x-MovieSceneItem
//        x-MovieSceneDetail
//   x-Hacer clic en una tarjeta y que aparezca en pantalla completa
//   x-Detalles de calidad: etiquetas form, texto si no es encuentra película, mayúsulas y minúsculas...

import '../styles/App.scss';
import getListApi from '../services/GetListApi';

import LocalStorage from '../services/localStorage'

import { useEffect, useState } from 'react';

import MovieSceneList from "./MovieSceneList";
import Filters from "./Filters";

import { Routes, Route, Link } from 'react-router-dom'
import { matchPath, useLocation } from 'react-router';

import MovieSceneDetail from './MovieSceneDetail';



function App() {

  //------------------VARIABLES DE ESTADO--------------------------

  //Necesito saber si hay datos el el LS. Si es así los agregamos a la variable de estado de todos los datos y a la de filtro por años y si no, está vacío

  //Variable de estado con un datos de la api
  const [dataList, setList] = useState(LocalStorage.get('Lista con todas las películas', []));

  //Variable de estado para filtrar por nombre de película
  const [filterMovieName, setFilterMovieName] = useState('');

  //Variable de estado para filtrar por año
  const [filterMovieYear, setFilterMovieYear] = useState('All');

  const [filterMovieChacarter, setFilterMovieChacarter] = useState('');


  useEffect(() => {
    if (dataList.length === 0) {
      getListApi().then((dataFromApi) => {

        setList(dataFromApi);
      });
    }
  }, []);


  //---------------LOCALSTORAGE-------------------------------

  useEffect(() => {
    LocalStorage.set('Lista con todas las películas', dataList);
    LocalStorage.set('filtrar por años', filterMovieYear);

  }, [dataList, filterMovieYear]);

  //Creo una función de filtrado a la que de doy un valor para filtrar por NOMBRE
  const FilterNameFunction = (value) => {
    setFilterMovieName(value)
  }

  //Creo una función de filtrado a la que de doy un valor para filtrar por AÑO
  const FilterYearFunction = (value) => {
    setFilterMovieYear(value)
  }

  const FilterCharacterFuncion = (value) => {
    setFilterMovieChacarter(value)
  }


  //Para que se salgan todas las películas
  const movieFilter = dataList
    .filter((movie) => {
      return (movie.movie.toLowerCase().includes(filterMovieName.toLowerCase()))


    })

    .filter((movie) => {
      return (movie.character.toLowerCase().includes(filterMovieChacarter.toLocaleLowerCase()))
    })




    .filter((movie) => {
      if (filterMovieYear === 'All') {
        return true
      }
      else {
        return movie.year === parseInt(filterMovieYear)
      }
    })


  //Para evitar repetir años al filtrar
  const getYears = () => {
    const years = dataList.map((uniqueYear) => uniqueYear.year);
    const onlyYear = years.filter((item, index) => {
      return years.indexOf(item) === index;
    });
    console.log(onlyYear)
    return onlyYear;

  };
  //-----------------------RUTAS---------------//
  const { pathname } = useLocation();

  const dataPath = matchPath('/movie/:id', pathname);

  console.log(dataPath);

  const movieId = dataPath !== null ? dataPath.params.id : null;

  const sceneFound = dataList.find((item) => item.id === movieId);

  return (
    <div className="App">
      <header>
        <h1 className='title'>owen wilson's "wow"</h1>
      </header>
      <main>
        <Routes>
          {/*-------------RUTA ESTÁTICA---------- */}
          <Route path='/' element={
            <>
              <Filters
                FilterNameFunction={FilterNameFunction} FilterYearFunction={FilterYearFunction}
                getYears={getYears()}
                FilterCharacterFuncion={FilterCharacterFuncion}
                filterMovieChacarter={filterMovieChacarter}

              />

              <MovieSceneList
                movies={movieFilter} />
            </>
          }
          /*-----------------------------------------------*/
          />
          <Route
            path="/movie/:id"
            element={<MovieSceneDetail
              sceneFound={sceneFound} />}
          />

        </Routes>

      </main>
    </div >
  );
}


export default App;
