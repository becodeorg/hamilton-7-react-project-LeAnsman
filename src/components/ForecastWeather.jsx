import React from "react";

const ForecastWeather = ({ day }) => {
  // console.log(forecastArr[0].main.feels_like);
  // console.log(id);
  return (
    // Switch to grid to get the responsive to be better looking ?
    <li className="flex flex-wrap items-center justify-between bg-purple-300 xl:w-1/2 shadow-lg gap-5 w-3/4 text-indigo-900 p-5">
      <p className="underline underline-offset-4">
        {day.dt_txt.slice(5, 10)} : {day.dt_txt.slice(10, 16)}
      </p>
      <p className="capitalize font-medium w-32 text-center">
        {day.weather[0].description}
      </p>
      <p>{day.main.humidity} %</p>

      <p className="font-medium">{Math.round(day.main.temp)} °C</p>
      <p className="hidden lg:block">{day.main.pressure} hPa</p>

      <img className="w-20" src={`icons/${day.weather[0].icon}.png`} alt="" />
    </li>
  );
};

export default ForecastWeather;
