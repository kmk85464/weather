import React from 'react';
import {Carousel,Card,Button} from 'react-bootstrap';
import { useContext } from 'react';
import {WeatherContext} from '../context/weatherContext.js';
import CityList from '../components/CityList.js';

const WeatherCarrousel = () => {
  const {weather,selectedCity} = useContext(WeatherContext);
  const city =  Array.isArray(weather) ? weather.find((c)=> c.nombre === selectedCity): null; 
  if (!city) return null;
    return (
      <>
        <Carousel>
        {city.fechas.map((entry,idx)=> (
          <Carousel.Item key={idx}>
            <Card className='text-center'>
              <Card.Img  style={{ maxHeight: "300px", objectFit: "cover" }}  variant='top'src={city.imagen} alt={city.nombre} />
               <Card.Body>
                  <Card.Title>{city.nombre} - {entry.fecha}</Card.Title>
                    <Card.Text>
                      <strong>Temperatura:{entry.temperatura.maxima} / {entry.temperatura.minima}</strong>
                      <strong>Viento:{entry.viento.velocidad}</strong>
                    </Card.Text>
               </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
        </Carousel>
        <h3 className='mt-4'><strong>Seleccionar Ciudad</strong></h3>
        <CityList />

      </>
    );



}
export default WeatherCarrousel;
