import React from 'react'; // Importa desde react
import Location from './Location';
import WeatherData from './WeatherData';

// Crea el componente WeatherLocation
const WeatherLocation = () => (
    <div>
        <Location city = {'Santiago'}></Location>
        <WeatherData></WeatherData>
    </div>
);


// exporta el componente WeatherLocation
export default WeatherLocation;