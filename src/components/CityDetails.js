import React from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import {WeatherContext} from '../context/weatherContext.js';
import {Table} from 'react-bootstrap';

const CityDetails = () => {
  const {nombre} = useParams();
  const {weather}= useContext(WeatherContext);
  const city = weather.find((c)=>c.nombre===nombre);
  if (!city) return <p><strong>Ciudad No Encontrada</strong></p>
  
  return (
    <>
    <h2>{city.nombre} <img src={city.imagen} alt={city.nombre}></img></h2>

    <Table striped bordered hover responsive>
     <thead>
      <tr>
       {city.fechas.map((entry,index)=> (
          <th key={index}>{entry.fecha}</th>
       ))}
      </tr>
     </thead>
      <tbody>
        <tr>
        {city.fechas.map((entry,index)=> (
          <td key={index}>{entry.temperatura.maxima}<strong>Cº</strong></td>
        ))}
        </tr>
        <tr>
        {city.fechas.map((entry,index)=> (
          <td key={index}>{entry.viento.velocidad} <strong>Km/h</strong></td>
        ))}

        </tr>
      </tbody>

    </Table>

    </>
  );


}
export default CityDetails;