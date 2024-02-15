import React from 'react'
import useFetch from '../UseFetch'


function Weather() {
    const Result = useFetch("https://api.openweathermap.org/data/2.5/weather?q=kakkanad&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric")
    console.log(Result);
    return (
        <div className='mt-3 ms-3'>
            <h1 style={{textDecoration:'underline'}}>Result</h1>
            <h3>Place : {`${Result.name}`}</h3>
            <h2>Temperature : {`${Result.main.temp}`}</h2>
            <h2>Temperature Feels Like : {`${Result.main.feels_like}`}</h2>
            <h2> Minimum Temperature : {`${Result.main.temp_min}`}</h2>
            <h2>Maximum Temperature : {`${Result.main.temp_max}`}</h2>
            <h2>Country : {`${Result.sys.country}`}</h2>
            <h2>Wind Speed : {`${Result.wind.speed}`}</h2>
        </div>
    )
}

export default Weather