import React from 'react'

const SearchBar = ({setFilter}) => {
return (
    <div>
        find countries <input onChange={(e) => setFilter(e.target.value)} />
    </div>
  );
}

export default SearchBar;