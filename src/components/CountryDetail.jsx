const CountryDetail = ({countryselected})=>{
    return(
        <>
        <ul>{countryselected.map((country)=>(
            <li key={country.cca3}>
                <h1>{country.name.common}</h1>
                <p> Capital: {country.capital}</p>
                <p> Área: {country.area}</p>
                <p> Lenguajes: {Object.values(country.languages).join(", ")}</p>
                <img
                    src={country.flags.png}
                    alt={country.flags.alt}
                    width="200"    
                />
            </li>
        ))}
        </ul>
        </>
    )
}
export default CountryDetail