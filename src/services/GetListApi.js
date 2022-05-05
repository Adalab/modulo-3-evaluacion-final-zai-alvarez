import { v4 as uuidv4 } from 'uuid';

const url = "https://owen-wilson-wow-api.herokuapp.com/wows/random?results=50"
const getWowList = () => {
    return fetch(url)
        .then((response) => response.json())
        .then((data) => {
            const dataCleanWow = data.map((quote) => {
                return {
                    id: uuidv4(),
                    poster: quote.poster,
                    movie: quote.movie,
                    full_line: quote.full_line,
                    year: quote.year,
                    director: quote.director,
                    audio: quote.audio,

                };
            });
            return dataCleanWow;
        });
};
export default getWowList;