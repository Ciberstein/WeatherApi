import React, { useState } from 'react'

export const WeatherCard = ({ weather, temperature }) => {

    const [isCelsius, setisCelsius] = useState(true)
    const handleClick = () => setisCelsius(!isCelsius)

    console.log(weather);

    return (
        <article className='weather__card'>
            <h1 className='weather__title'>Weather App</h1>
            <h2 className='weather__subtitle'><i className="fal fa-map-marker-alt"></i> {weather?.name}, {weather?.sys.country}</h2>
            <div className='weather__body'>
                <div className='weather__imgItem'>
                    <img src={`http://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt={weather?.name} />
                    <h2><i className="fal fa-thermometer-half"></i> {isCelsius ? temperature?.celsius + ' C°' : temperature?.farenheit + ' F°' }</h2>
                </div>
                <section className='weather__descItem'>
                    <h3>"{weather?.weather[0].description}"</h3>
                    <ul>
                        <li><span><b><i class="fas fa-wind"></i> Wind speed: </b></span>{weather?.wind.speed} m/s</li>
                        <li><span><b><i class="fas fa-dewpoint"></i> Humidity: </b></span>{weather?.main.humidity}%</li>
                        <li><span><b><i class="fas fa-clouds"></i>Clouds: </b></span>{weather?.clouds.all}%</li>
                        <li><span><b><i class="fas fa-tire-pressure-warning"></i> Pressure: </b></span>{weather?.main.pressure} hPa</li>
                    </ul>
                </section>
            </div>
            <footer className='weather__footer'>
                <button onClick={handleClick}>Change to °{ isCelsius ? 'F' : 'C' }</button>
            </footer>
        </article>
    )
}
