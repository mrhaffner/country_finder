import React, { useState, useEffect } from 'react'
import Weather from './Weather'
import axios from 'axios'
require('dotenv').config()

const Country = ({country}) => {
    const [ weather, setWeather ] = useState(null)
    useEffect(() => {
        axios
          .get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${country.name}`)
          .then(response => {
            console.log(response.data)
            setWeather(response.data)
          })
        
      }, [country.name])

    return (
        <div>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h2>Spoken languages</h2>
            <ul>
                {country.languages.map(language => <li key={language.name}>{language.name}</li>)}
            </ul>
            <img src={country.flag} alt=""/>
            <h2>Weather in {country.name}</h2>
            {
                weather === null
                    ? <p>Loading Weather Data</p>
                    : <Weather weather={weather} />}
        </div>
    );
}

export default Country;