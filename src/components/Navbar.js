import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { WeatherContext } from '../context/weatherContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { use } from 'react';
//Navbar con submenu de ciudades
const Navbar = () => {

    const {weather} = useContext(WeatherContext);
    return(
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link className='navbar-brand ms-3' to='/'><strong>WeatherContext</strong></Link>
        <div className='collapse navbar-collapse'>
          <ul className='navbar-nav ms-auto me-3'>
            <li className='nav-item dropdown'>
              <span className='nav-link dropdown-toggle' data-bs-toggle="dropdown">
                Ciudades
              </span>
              <ul className='dropdown-menu dropdown-menu-end'>
              {Array.isArray(weather) && weather.map((city)=> (
                <li key={city.nombre}>
                  <Link className='dropdown-item' to={`/ciudad/${city.nombre}`}>
                  {city.nombre}
                  </Link>
                </li>
              ))}
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    );
};
export default Navbar;