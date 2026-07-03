const SearchEngine = ({value, handle}) => (
    <>
    <h2>Find new country</h2> <input onChange={handle} value={value}/>
    </>
)

export default SearchEngine