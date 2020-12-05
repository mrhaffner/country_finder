import React from 'react'

const Country = ({weather}) => {
    
    return (
        <div>
            <p><strong>temperature: </strong>{weather.current.temperature} Celsius</p>
            <img src={weather.current.weather_icons[0]} alt=""/>
            <p><strong>wind: </strong>{weather.current.wind_speed} mph direction{weather.current.wind_dir}</p>
        </div>
    );
}

export default Country;







