import axios from "axios";
import { useEffect, useState } from "react";
import Country from "./components/Country";

const App = () => {
  // state to store countries data
  const [countries, setCountries] = useState([])

  // state to store search query
  const [query, setQuery] = useState('')

  // state to store filtered countries
  const [countriesFilter, setCountriesFilter] = useState([])

  // state to store countries to be displayed
  const [showCountry, setShowCountry] = useState({})

  // fetching countries data from REST api
  const getCountryData = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        // console.log(response.data);
        setCountries(response.data)
      })
  }

  useEffect(getCountryData, [])

  useEffect(() => {
    setShowCountry(
      countriesFilter.length === 1
        ? { ...countriesFilter[0] }
        : {}
    )
  }, [countriesFilter])

  // handle search query
  const handleSearchQuery = (e) => {
    setQuery(e.target.value)
    // filter the countries
    setCountriesFilter(
      countries.filter(
        (country) =>
          country.name.toLowerCase().search(e.target.value.toLowerCase()) !== -1
      )
    )
    // console.log(countriesFilter);
  }

  // display countries
  const displayCountriesNames = () => {
    return countriesFilter.map((country) => (
      <p key={country.numericCode}>
        {country.name}
        {/* button to toggle show country data */}
        <button onClick={() => setShowCountry(country)}>show</button>
      </p>
    ))
  }

  return (
    <div>
      <label htmlFor="search">Find countries </label>
      <input type="text"
        value={query}
        name="search"
        onChange={handleSearchQuery}
      />

      {/* display a list of countries matching the search query */}
      {countriesFilter.length > 10
        ? <p>Too many matches, specify another filter</p>
        : countriesFilter.length > 1
          // if more than one country found then display their names
          ? displayCountriesNames()
          // if single country found then display country data
          : showCountry.name && <Country data={showCountry} />
      }
      
      {/* when show button is pressed, display the data of that country below */}
      {showCountry.name && <Country data={showCountry} />}
    </div>
  );
}

export default App;