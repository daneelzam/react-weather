import React, { useEffect, useState } from 'react';
import SearchArea from '../searchArea/SearchArea';
import WeatherList from '../WeatherList/WeatherList';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState({ id: 498817 });
  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?id=${city.id}&lang=ru&units=metric&APPID=f967bbb8cfd9665cc38e9c3fb8260379`)
      .then((res) => res.json())
      .then((result) => setWeather(result));
  }, [city]);

  return (
        <div className='container d-flex flex-column align-items-center'>
          <SearchArea setCity = {setCity}/>
          {weather && <WeatherList weather = {weather} />}
        </div>
  );
}

export default App;
