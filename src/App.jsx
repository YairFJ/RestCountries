import { useEffect, useState } from 'react'
import SearchEngine from './components/SearchEngine'
import Country from './components/Country'
import countryService from './services/contries'

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() =>{
    countryService.getAll().then((country) => setCountries(country))
  }, [])



  
  return (
    <>
    <SearchEngine/>
    <Country list={countries}/>
    </>
  )  
 
 
}

export default App
