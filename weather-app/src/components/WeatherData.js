import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature'

const WeatherData = () => (
    <div>
        <WeatherTemperature 
            temperature={20}
            weatherState={''}
        />
        <WeatherExtraInfo humidity={80} wind={"10 m/s"}></WeatherExtraInfo>
    </div>
);

export default WeatherData;