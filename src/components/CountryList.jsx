const countryList = ({countries}) => {
    return(
        countries.map((country)=>
            <p>{country}</p>
        )
    )
}

export default countryList