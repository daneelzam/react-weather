import React from 'react';
import cities from '../../src/city.list.json';

function SearchArea({ setCity }) {
  const changeCity = (event) => {
    event.preventDefault();
    const { cityName: { value: cityName } } = event.target;
    setCity((prevState) => {
      const newState = cities.filter((city) => city.name.toLowerCase() === cityName.toLowerCase());
      if (newState.length) {
        return newState[0];
      }
      return prevState;
    });
  };
  return (
        <form onSubmit={changeCity} className='form-group m-1'>
            <small id="emailHelp" className="form-text text-muted">Введите название города на английском языке</small>
            <input type='Text' name='cityName'/>
            <input type='Submit' className='btn btn-primary' value='Search'/>
        </form>
  );
}

export default SearchArea;
