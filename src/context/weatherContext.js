import React from 'react';
import { createContext, useState,useEffect } from 'react';
import weatherData from '../data/weather.json';

export const WeatherContext = createContext();
export const WeatherProvider = ({children}) => {
  const [weather, setWeather] = useState([]);
  const [selectedCity, setSelectedCity]= useState(null);

  useEffect (() => {

    setWeather(weatherData.ciudades);
    setSelectedCity(weatherData.ciudades[0]?.nombre || null);


  },[]);

  return (
    <WeatherContext.Provider value = {{weather,selectedCity,setSelectedCity}}>
      {children}

    </WeatherContext.Provider>


  );

}
