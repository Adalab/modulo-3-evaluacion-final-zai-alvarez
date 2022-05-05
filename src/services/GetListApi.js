import { v4 as uuidv4 } from 'uuid';

const url = "https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50"
const getWowList = () => {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const dataCleanWow = data.map((item) => {
                return {
                    id: uuidv4(),
                    poster: item.poster,
                    movie: item.movie,
                    full_line: item.full_line,
                    year: item.year,
                    director: item.director,
                    audio: item.audio,

                };
            });
            return dataCleanWow;
        });
};
export default getWowList;