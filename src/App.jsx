import { useEffect, useState } from 'react'
import SearchEngine from './components/SearchEngine'
import CountryList from './components/CountryList'
import countryService from './services/contries'
import CountryDetail from './components/CountryDetail'
import weatherService from './services/weather'


function App() {
  const [countries, setCountries] = useState([])
  const [selectCountry, setSelectCountry] = useState('')
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    countryService.getAll().then((country) => {
      setCountries(country)})}, [])

  const handleFilter = (event) => {
    setSelectCountry(event.target.value)
  }


  const exactCountry = countries.find(
    country=> country.name.common.toLowerCase() === selectCountry.toLowerCase()
  )

  const countryToShow = exactCountry
  ? [exactCountry]
  : countries.filter((country) => country.name.common.includes(selectCountry))

   useEffect(() => {

    if(countryToShow.length === 1){
      const capital = countryToShow.map((country) => country.capital?.[0])
      weatherService.getWeather(capital[0]).then((weather) => setWeather(weather))
    }},[exactCountry?.name.common])
  
  return (
    <>
    <SearchEngine handle={handleFilter} value={selectCountry}/>
    <CountryList list={countryToShow}/>
    {countryToShow.length === 1 ? <CountryDetail countryselected={countryToShow} weather={weather} /> : null}
    </>
  )  
}

export default App
