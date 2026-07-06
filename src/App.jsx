import { useEffect, useState } from 'react'
import SearchEngine from './components/SearchEngine'
import CountryList from './components/CountryList'
import countryService from './services/contries'
import contries from './services/contries'
import CountryDetail from './components/CountryDetail'

function App() {
  const [countries, setCountries] = useState([])
  const [selectCountry, setSelectCountry] = useState('')

  useEffect(() => {
    countryService.getAll().then((country) => {
      setCountries(country)
    })
  }, [])

  const handleFilter = (event) => {
    setSelectCountry(event.target.value)
  }

  const onSearch = (event) => {
    event.preventDefault()
    countryService.get(selectCountry).then((country) => 
      setCountries(country))
  }

  const countryToShow = countries.filter((country) => country.name.common.includes(selectCountry))

  return (
    <>
    <SearchEngine handle={handleFilter} value={selectCountry}/>
    <CountryList list={countryToShow}/>
    {countryToShow.length === 1 ? <CountryDetail countryselected={countryToShow} /> : null}
    </>
  )  
 
 
}

export default App
