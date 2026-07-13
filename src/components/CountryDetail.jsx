

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
                {weather && (
                <>
                    <h3>Temperature: {weather.main.temp} °C</h3>

                    <img
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                    alt={weather.weather[0].description}
                    />

                    <p>Wind: {weather.wind.speed} m/s</p>
                </>
                )}
                
            
                
            
            </li>
      
        </ul>
        </>
    )
}
export default CountryDetail