//Para sacar una propiedad del LS
const get = (key, defaultData) => {
    const localStorageData = localStorage.getItem(key);
    if (localStorageData === null) {
        return defaultData;
    }
    else {
        return JSON.parse(localStorageData);
    }
};

//Para guardar una propiedad en el LS
const set = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

//Necesito crear un objeto para exportar sus propiedades y poder usarlas
const objetToExport = {
    get: get,
    set: set,
};

export default objetToExport;