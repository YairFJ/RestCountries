import { useState } from 'react'
import SearchEngine from './components/SearchEngine'
import CountryList from './components/CountryList'
import CountryDetail from './components/CountryDetail'
import { useState } from 'react'

function App() {

  const [selectedCountry, setSelectedCountry]=useState(null)
  
  return (
    <div>
      <SearchEngine />
      <CountryDetail country={countrySelected}/>
    </div>
  )  
 
 
}

export default App
