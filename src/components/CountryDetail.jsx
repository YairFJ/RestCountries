const CountryDetail = ({countryselected})=>{
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
            </li>
      
        </ul>
        </>
    )
}
export default CountryDetail