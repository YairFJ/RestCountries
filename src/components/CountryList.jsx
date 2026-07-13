const CountryList = ({list}) => {

    if(list.length > 100) return null
        
    if(list.length > 10) return (<p>Too many matches, specify another filter</p>)
       
    return(
        <ul>
            {list.map((country) => (
                <li key={country.name.common}>
                <h3>{country.name.common}</h3>
                </li>
            ))}
        </ul>
    ) 
}

export default CountryList