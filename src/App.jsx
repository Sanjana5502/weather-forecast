import { useEffect } from 'react'
import './App.css'
import { Button } from './components/Button'
import { Cards } from './components/Cards'
import { Input } from './components/Input'
import { useWeather } from './context/Weather'

function App() {
const weather = useWeather();
console.log(weather)

useEffect(() => {
  weather.fetchCurrentUserLocationData();
}, []);

  return (
    <div>
    <h1>Weather Forecast</h1>
    <Input/>
    <Button onClick={weather.fetchData} value="Search" />
    <Cards/>
    </div>
  )
}

export default App
