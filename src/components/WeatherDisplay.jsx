import React from "react";

const WeatherDisplay = ({
  cityInformations,
  city,
  weatherInformations,
  currentWeatherInformations,
}) => (
  <div>
    {weatherInformations.length > 0 && (
      <>
        <div className="flex flex-col w-2/4 mx-auto rounded-lg shadow-lg text-indigo-900">
          <div className="TOP flex justify-between p-5 space-y-2">
            <div className="flex flex-col justify-evenly">
              <h2 className="text-xl capitalize">
                {city} , {cityInformations.country}
              </h2>
              <p className="capitalize">
                {currentWeatherInformations.weather[0].description}
              </p>
              <p>{Math.round(currentWeatherInformations.main.temp)} °C</p>
            </div>
            <div>
              <img
                src={`icons/${currentWeatherInformations.weather[0].icon}.png`}
                alt=""
              />
            </div>
          </div>
          <div className="BOTTOM p-5 bg-purple-200 space-y-2">
            <div className="flex justify-between">
              <p>Wind</p>
              <p>{currentWeatherInformations.wind.speed} m/s</p>
            </div>
            <div className="flex justify-between">
              <p>Humidity</p>
              <p>{currentWeatherInformations.main.humidity} %</p>
            </div>
            <div className="flex justify-between">
              <p>Pressure</p>
              <p>{currentWeatherInformations.main.pressure} hPa</p>
            </div>
          </div>
        </div>
      </>
    )}
  </div>
);

export default WeatherDisplay;
