import axios from 'axios'

const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?'

const api_key = import.meta.env.VITE_WEATHER_KEY

const getWeather = (country) => {

    if (!api_key) {
        alert("You need an API KEY VALID!")
    } else {
        const request = axios.get(`${baseUrl}q=${country}&appid=${api_key}`)
        return request.then(response => response.data)
    }    
}

export default {getWeather}