import React from 'react'
import { useWeather } from '../context/Weather';

export const Cards = () => {
  const weather = useWeather();

  return (
    <div className="card">
      <img src={weather?.data?.current?.condition?.icon} />
      <h2>{weather?.data?.current?.temp_c}{weather?.data?.current?.temp_c ? '.C':<img style={{height:'50px', width:'50px'}} 
      src='../night-forecast-svgrepo-com.svg'/>}</h2>
      <h5>{weather?.data?.location?.name}{weather?.data?.location?.name ? ',':''} {weather?.data?.location?.region}{" "}
        {weather?.data?.location?.country}</h5>
    </div>
  )
}
