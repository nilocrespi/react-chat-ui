import "./SearchBar.css"

const SearchBar = () => {
  return (
    <div className = "search-container">
      <input type="search" placeholder="Search..." className = "search"></input>
    </div>
  )
}

export default SearchBar