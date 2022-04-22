import React, { useEffect, useState } from 'react'
import '../App.css';


const Temp = () => {
    const [city, setCity] = useState(null)
    const [search, setSearch] = useState('Karachi')
    const [country, setCountry] = useState('')
    const [cityName, setCityName] = useState('')
    useEffect(() => {
        const FetchingApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=9389ebd79d0cdde2e07bd74d2538134c`
            const dataFromApi = await fetch(url)
            const jsonData = await dataFromApi.json()
            setCity(jsonData.main)
            setCountry(jsonData.sys.country)
            setCityName(jsonData.name)
        }
        FetchingApi()
    }, [search])
    return (
        <div className="mainDiv">
            <div className="innerDiv">
                <input
                    className="input"
                    placeholder='Please type any city name'

                    onChange={(e) => setSearch(e.target.value)}
                    type='search' />
            </div>
            {!city ? (<h2> No Data Found</h2>) : <div>
                <h2>{cityName} </h2>
                <h4>Temp : {Math.round(city.temp) + '\u00B0 C'}</h4>
                <h4>Feels Like : {Math.round(city.feels_like) + '\u00B0 C'}</h4>
                <h4>Min Temp : {Math.round(city.temp_min) + '\u00B0 C'}</h4>
                <h4>Max Temp : {Math.round(city.temp_max) + '\u00B0 C'}</h4>
                <h4>Humidity : {Math.round(city.humidity) + '\u00B0 C'}</h4>
                <h4>Country : {country}</h4>
            </div>}
        </div>
    )
}
export default Temp
