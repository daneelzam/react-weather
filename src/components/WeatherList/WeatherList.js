import React, { useEffect, useState } from 'react';
import Day from '../Day/Day';
import Detailed from '../Detailed/Deteiled';

function WeatherList({ weather }) {
  const [days, setDays] = useState();
  const [visible, setVisible] = useState(null);
  useEffect(() => {
    setDays(() => {
      const newState = weather.list.filter((reading) => reading.dt_txt.includes('18:00:00'));
      return newState;
    });
  }, [weather]);
  return (
        <div className='d-flex flex-column align-items-center'>
            <h1>Погода в {weather.city.name}</h1>
            <h2>
            {days
            && `с ${new Date(days[0].dt * 1000).toLocaleString('ru', { month: 'numeric', day: 'numeric' })}
            по ${new Date(days[days.length - 1].dt * 1000).toLocaleString('ru', { month: 'numeric', day: 'numeric' })}`
            }
            </h2>
            <ul className='d-flex justify-content-between'>
                {days && days.map((day) => <Day key={day.dt} setVisible={setVisible} day={day} />)}
            </ul>
            {visible && <Detailed day={days.filter((day) => day.dt === visible)}/>}
        </div>
  );
}

export default WeatherList;
