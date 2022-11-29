import React, { useState } from "react";
import axios from "axios";
import WeatherDisplay from "./components/WeatherDisplay";
import ForecastList from "./components/ForecastList";
import WeatherSearch from "./components/WeatherSearch";

function App() {
  // const [city, setCity] = useState();
  const [cityInformations, setCityInformations] = useState([]);
  const [weatherInformations, setWeatherInformations] = useState([]);
  const [currentWeatherInformations, setCurrentWeatherInformations] = useState(
    []
  );
  const [forecastArr, setForecastArr] = useState();

  const onSearchChangeHandler = async (searchData) => {
    const coordinates = searchData.value.split(" ");
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${coordinates[0]}&lon=${coordinates[1]}&units=metric&appid=e18fa0a15f3c9567b66e08d31f967278`
      )
      .then((res) => {
        setWeatherInformations(res.data.list);
        setCurrentWeatherInformations({
          city: searchData.label,
          ...res.data.list[0],
        });
        setForecastArr([
          res.data.list[8],
          res.data.list[16],
          res.data.list[24],
          res.data.list[32],
          res.data.list[39],
        ]);
        setCityInformations(res.data.city);
      });
  };

  return (
    <div className="App">
      <h1 className="p-5 text-2xl font-medium bg-purple-200 text-indigo-900 mb-5">
        Weather app
      </h1>
      <WeatherSearch onSearchChange={onSearchChangeHandler} />
      {/* <WeatherGet
        city={city}
        setCity={setCity}
        cityInformations={cityInformations}
        setCityInformations={setCityInformations}
        weatherInformations={weatherInformations}
        setWeatherInformations={setWeatherInformations}
        setCurrentWeatherInformations={setCurrentWeatherInformations}
        setForecastArr={setForecastArr}
      /> */}
      <WeatherDisplay
        cityInformations={cityInformations}
        // city={city}
        weatherInformations={weatherInformations}
        currentWeatherInformations={currentWeatherInformations}
        forecastArr={forecastArr}
      />
      <ForecastList
        forecastArr={forecastArr}
        weatherInformations={weatherInformations}
      />
    </div>
  );
}

export default App;
