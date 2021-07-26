import axios from "axios";
import { useEffect, useState } from "react";

const weather_api_key = process.env.REACT_APP_API_KEY

const Country = ({ data: { name, capital, population, languages, flag } }) => {
    // console.log(name, capital, population, languages, flag)

    const [weather, setWeather] = useState({})

    useEffect(() => {
        // get weather data from weather API
        axios
            .get(`http://api.weatherstack.com/current?access_key=${weather_api_key}&query=${capital}`)
            .then(res => {
                // console.log(res.data.current);
                setWeather(res.data.current)
            })
            .catch(err => {
                console.error(err);
            })
        return () => setWeather({})
    }, [capital])


    return (
        <div>
            <h1>{name}</h1>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>

            {/* Languages spoken in the country */}
            <h2>Languages</h2>
            <ul>
                {languages.map((language) => (
                    <li key={language.name}>
                        {language.name}
                    </li>
                ))}
            </ul>

            {/* Flag of the country */}
            <img src={flag} alt={`${name}'s flag`} width="100px" />

            {/* Weather for the capital of the country */}
            <h2>Weather report for {capital}</h2>
            <p><strong>Temperature: </strong>{weather.temperature}&deg; Celsius</p>
            <img
                src={weather.weather_icons}
                alt={weather.weather_description}
            />
            <p><strong>Wind speed: </strong>{weather.wind_speed} km/h</p>
            <p><strong>Wind direction: </strong>{weather.wind_dir}</p>
        </div>
    );
}

export default Country;