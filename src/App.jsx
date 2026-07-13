import { useEffect, useState } from 'react'
import SearchEngine from './components/SearchEngine'
import CountryList from './components/CountryList'
import countryService from './services/contries'
import contries from './services/contries'
import CountryDetail from './components/CountryDetail'
import weatherService from './services/weather'
import axios from 'axios'


function App() {
  const [countries, setCountries] = useState([])
  const [selectCountry, setSelectCountry] = useState('')
  const [weather, setWeather] = useState(null)

 

  

  const handleFilter = (event) => {
    setSelectCountry(event.target.value)
  }

   const onSearch = (event, country)=>{
    event.preventDefault()
    const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api'
    const request = axios.get(`${baseUrl}/name/${country}`)
    return request.then(response => response.data )
    setCountries(country)
    
  } 


  const exactCountry = countries.find(
    country=> country.name.common.toLowerCase() === selectCountry.toLowerCase()
  )

  const countryToShow = exactCountry
  ? [exactCountry]
  : countries.filter((country) => country.name.common.includes(selectCountry))

   useEffect(() => {
    countryService.getAll().then((country) => {
      setCountries(country)
    })

    if(countryToShow.length === 1){

      const capital = countryToShow.map((country) => country.capital?.[0])
      weatherService.getWeather(capital[0]).then((weather) => {
      setWeather(weather)})
      
    }
    
  }, [countryToShow])

  
  return (
    <>
    <SearchEngine handle={handleFilter} value={selectCountry}/>
    <CountryList list={countryToShow}/>
    {countryToShow.length === 1 ? <CountryDetail countryselected={countryToShow} weather={weather} /> : null}
    </>
  )  
}

export default App
