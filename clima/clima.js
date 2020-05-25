const axios = require('axios').default;


const getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lon }&appid=f7dcc431269717c2eebe8bdb2aabc662&units=metric`);

    if (resp.data.length === 0) {
        throw new Error(`No hay resultados para la latitud: ${ lat } y longitud: ${lon}`);
    }

    const data = resp.data;

    return data.main.temp;
}

module.exports = {
    getClima
}