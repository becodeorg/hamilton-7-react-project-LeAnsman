import React from "react";

const ForecastWeather = ({ day }) => {
  // console.log(forecastArr[0].main.feels_like);
  console.log(day);
  return (
    <li className="flex space-x-10">
      <p>{day.dt_txt}</p>
      <p className="capitalize">{day.weather[0].description}</p>
      <p>{day.main.temp}</p>
      <p>{day.main.humidity}</p>
      <p>{day.main.pressure}</p>

      <img src={`icons/${day.weather[0].icon}.png`} alt="" />
    </li>
  );
};

export default ForecastWeather;
