import axios from 'axios'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather'

const api_key = import.meta.env.VITE_WEATHER_KEY

const getWeather = (capital) => {

    if (!api_key) {
        alert("You need an API KEY VALID!")
    } else {
        const request = axios.get(`${baseUrl}?q=${capital}&units=metric&appid=${api_key}`)
        return request.then(response => response.data)
    }
}

export default {getWeather}