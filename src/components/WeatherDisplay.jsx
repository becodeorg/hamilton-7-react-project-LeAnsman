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
        <div className="flex flex-col w-3/4 md:w-1/2 mx-auto rounded-lg shadow-lg text-indigo-900">
          <div className="TOP flex justify-between p-5 space-y-2">
            <div className="flex flex-col justify-evenly">
              <h2 className="text-lg sm:text-2xl capitalize font-medium">
                {currentWeatherInformations.city}
              </h2>
              <p className="capitalize font-medium">
                {currentWeatherInformations.weather[0].description}
              </p>
              <p className="font-medium text-xl">
                {Math.round(currentWeatherInformations.main.temp)} °C
              </p>
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
              <p className="underline underline-offset-2">Wind</p>
              <p>{currentWeatherInformations.wind.speed} m/s</p>
            </div>
            <div className="flex justify-between">
              <p className="underline underline-offset-2">Humidity</p>
              <p>{currentWeatherInformations.main.humidity} %</p>
            </div>
            <div className="flex justify-between">
              <p className="underline underline-offset-2">Pressure</p>
              <p>{currentWeatherInformations.main.pressure} hPa</p>
            </div>
          </div>
        </div>
      </>
    )}
  </div>
);

export default WeatherDisplay;
