import { useEffect, useState } from 'react'
import SearchEngine from './components/SearchEngine'
import Country from './components/Country'
import countryService from './services/contries'
import contries from './services/contries'

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

  const searchData = selectCountry === '' ? countries : countryToShow

  return (
    <>
    <SearchEngine handle={handleFilter} value={selectCountry}/>
    <Country list={countryToShow}/>
    </>
  )  
 
 
}

export default App
