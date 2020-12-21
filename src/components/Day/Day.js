import React from 'react';

function Day({ day, setVisible }) {
  const showDay = () => {
    setVisible(day.dt);
  };
  return (
        <li className='card d-flex flex-column align-items-center' style={{ width: '18rem' }}>
            <i className={`owf owf-${day.weather[0].id} owf-5x icon-style card-img-top`} style={{ textAlign: 'center' }}></i>
            <h6 class="card-title">
                {new Date(day.dt * 1000).toLocaleString('ru', { weekday: 'long' })}
            </h6>
            <p class="card-text">{day.main.temp}</p>
            <button type="Button" onClick={showDay} class="btn btn-primary m-2">Детальная информация</button>
        </li>
  );
}

export default Day;
