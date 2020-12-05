import React, { useState, useEffect } from 'react'
import SearchBar from './components/SearchBar'
import CountryList from './components/CountryList'
import Country from './components/Country'

import axios from 'axios'

const App = () => {
  const [ countries, setCountries ] = useState([])
  const [ filter, setFilter ] = useState('')
  const [ filtered, setFiltered ] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log(response.data)
        setCountries(response.data)
      })
    
  }, [])

  useEffect(() => {
    const filterCountries = countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))
    setFiltered(filterCountries)
  }, [filter, countries])


  return (
    <div>
      <SearchBar setFilter={setFilter} />
      {
        filtered.length > 10
          ? <p>Too many matches, specify another fitler</p>
          : filtered.length === 1
          ? <Country country={filtered[0]} />
          : <CountryList filtered={filtered} />
      }
    </div>
  );
}

export default App;
