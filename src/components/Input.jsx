import React from 'react';
import { useWeather } from '../context/Weather';

export const Input = () => {
  const weather = useWeather();
  console.log("weather", weather);

  return (
    <input
      className='input-file'
      placeholder='Search here'
      value={weather.searchCity || ''} 
      onChange={(e) => weather.setSearchCity(e.target.value)}
    />
  );
};
