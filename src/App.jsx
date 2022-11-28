import React, { useState } from "react";
import WeatherDisplay from "./components/WeatherDisplay";
import WeatherGet from "./components/WeatherGet";

function App() {
  const [city, setCity] = useState("");
  const [cityInformations, setCityInformations] = useState([]);
  const [weatherInformations, setWeatherInformations] = useState([]);
  const [currentWeatherInformations, setCurrentWeatherInformations] = useState(
    []
  );

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
      />
      <WeatherDisplay
        cityInformations={cityInformations}
        city={city}
        weatherInformations={weatherInformations}
        currentWeatherInformations={currentWeatherInformations}
      />
    </div>
  );
}

export default App;
