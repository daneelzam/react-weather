import React from 'react';

function Deteiled({ day }) {
  const newDay = day[0];
  return (
        <div className='card d-flex flex-column align-items-center' style={{ width: '70%' }}>
         <i className={`owf owf-${newDay.weather[0].id} owf-5x icon-style card-img-top`} style={{ textAlign: 'center' }}></i>
            <h5 class="card-title">
                {new Date(newDay.dt * 1000).toLocaleString('ru', { weekday: 'long' })}
            </h5>
            <h6 class="card-subtitle text-muted">{newDay.weather[0].description}</h6>

            <p class="card-text">Минимальная температура:{newDay.main.temp_min}</p>
            <p class="card-text">Максимальная температура температура:{newDay.main.temp_max}</p>
            <p class="card-text">Средняя температура:{newDay.main.temp}</p>
            <p class="card-text">Ощущается как:{newDay.main.feels_like}</p>

        </div>
  );
}

export default Deteiled;
