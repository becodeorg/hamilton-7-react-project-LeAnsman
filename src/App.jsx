import React, { useState } from "react";
import WeatherDisplay from "./components/WeatherDisplay";
import WeatherGet from "./components/WeatherGet";
import ForecastList from "./components/ForecastList";

function App() {
  const [city, setCity] = useState();
  const [cityInformations, setCityInformations] = useState([]);
  const [weatherInformations, setWeatherInformations] = useState([]);
  const [currentWeatherInformations, setCurrentWeatherInformations] = useState(
    []
  );
  const [forecastArr, setForecastArr] = useState();

  return (
    <div className="App">
      <h1 className="p-5 text-2xl font-medium bg-purple-200 text-indigo-900">
        Weather app
      </h1>
      <WeatherGet
        city={city}
        setCity={setCity}
        cityInformations={cityInformations}
        setCityInformations={setCityInformations}
        weatherInformations={weatherInformations}
        setWeatherInformations={setWeatherInformations}
        setCurrentWeatherInformations={setCurrentWeatherInformations}
        setForecastArr={setForecastArr}
      />
      <WeatherDisplay
        cityInformations={cityInformations}
        city={city}
        weatherInformations={weatherInformations}
        currentWeatherInformations={currentWeatherInformations}
        forecastArr={forecastArr}
      />
      {/* If there is a forecastArr then --> */}
      <ForecastList
        forecastArr={forecastArr}
        weatherInformations={weatherInformations}
      />
    </div>
  );
}

export default App;
