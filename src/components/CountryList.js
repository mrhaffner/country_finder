import React from 'react'

const CountryList = ({filtered}) => {

return (
    <div>
        {filtered.map(country => <p key={country.name} >{country.name}</p>)}
    </div>
  );
}

export default CountryList;