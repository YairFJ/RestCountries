const countryDetail = ({country})=>{
    return(
        <>
        <ul>
            <li>
                <h1>{country.name}</h1>
                <p>Capiltal{country.capital}</p>
                <p>Area{country.area}</p>
                <p>Lenguage{country.lenguage}</p>
                <p>Flags{country.flags}</p>
            </li>
        </ul>
        </>
        

    )
}
export default countryDetail