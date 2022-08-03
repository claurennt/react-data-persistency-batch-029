import React from "react";
import "./WeatherCard.css";
const WeatherCard = ({
  dt_txt,
  main: { temp_min, temp_max },
  weather: [{ icon, description }],
}) => {
  return (
    <div className="WeatherCard">
      <h2>Weather for day/hour {dt_txt}</h2>
      <img src={` http://openweathermap.org/img/wn/${icon}.png`} />
      <p>{description}</p>
      <p>Min temperature: {temp_min}</p>
      <p>Max temperature:{temp_max}</p>

      <p></p>
    </div>
  );
};

export default WeatherCard;
