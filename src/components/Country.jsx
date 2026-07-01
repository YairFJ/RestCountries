const Country = ({list}) => (
    <ul>
        {list.map((country) => (
            <li key={country.name.common}><p> {country.name.common} | {country.capital} </p></li>
        ))}
    </ul>
)

export default Country