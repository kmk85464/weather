import React, { useContext } from 'react';
import {WeatherContext} from '../context/weatherContext.js';
import { Button } from 'react-bootstrap';

const CityList = () => {
 
    const [weather,setSelectedCity] = useContext(WeatherContext);
    return (
        <div className='d-flex flex-wrap gap-3 mt-3'>
          {weather.map((city)=> (
          <div key={city.nombre}>
            <span className='me-2'>{city.nombre}</span>
            <Button variant='primary' onClick={()=> setSelectedCity(city.nombre)}>
              Seleccionar
            </Button>
          </div>            
          ))}
        </div>
 );
}
export default CityList;