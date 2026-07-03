const Country = ({list}) => {

  return list.length > 10 ? (
    <p>Too many matches, specify another filter</p>
  ) : (
    <ul>
      {list.map((country) => (
        <li key={country.name.common}>
          <p>{country.name.common} | {country.capital}</p>
        </li>
      ))}
    </ul>
  )
}

export default Country