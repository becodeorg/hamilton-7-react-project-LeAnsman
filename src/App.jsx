import React, { useState } from "react";
import WeatherDisplay from "./components/WeatherDisplay";
import WeatherGet from "./components/WeatherGet";

function App() {
  const [city, setCity] = useState("Liège");
  const [cityInformations, setCityInformations] = useState([]);
  const [weatherInformations, setWeatherInformations] = useState([]);

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
      />
      <WeatherDisplay
        cityInformations={cityInformations}
        city={city}
        weatherInformations={weatherInformations}
      />
    </div>
  );
}

export default App;
