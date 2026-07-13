

const CountryDetail = ({countryselected, weather})=>{
    if(countryselected.length === 0){
        return null;
    }
    
    const country = countryselected[0]

    return(
        <>
        <ul>
            <li >
                
                <p> Capital: {country.capital}</p>
                <p> Área: {country.area}</p>
                <p> Lenguajes: {Object.values(country.languages).join(", ")}</p>
                <img
                    src={country.flags.png}
                    alt={country.flags.alt}
                    width="200"    
                />
                <h2>Weather in {country.capital}</h2>

                <h3>Weather: {weather?.main?.temp}</h3>
                
            
                
            
            </li>
      
        </ul>
        </>
    )
}
export default CountryDetail