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
  const [bgImg, setBgImg] = useState();
  const [loading, setLoading] = useState(false);

  const onSearchChangeHandler = async (searchData) => {
    const cityQuery = searchData.label.split(",");
    const coordinates = searchData.value.split(" ");
    try {
      setLoading(true);
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
          // convert so that we can use this in the api url
          console.log(cityQuery[0]);
        });
      return await axios
        // change the query in the url to get a photo of the city
        .get(
          `https://api.unsplash.com/search/photos/?client_id=vgw0C7QO3BY1v-mDtsl0zrYrESFbevS_OVXlid1yX78&query=${cityQuery[0]}`
        )
        .then((res) => {
          setBgImg(res.data.results[0].urls.regular);
          setLoading(false);
        });
    } catch (err) {
      return console.error(err);
    }
    // return await axios
    //   .get(
    //     "https://api.unsplash.com/photos/random/?client_id=vgw0C7QO3BY1v-mDtsl0zrYrESFbevS_OVXlid1yX78"
    //   )

    //   .then((res) => res.json())
    //   .then((res) => console.log(res.urls.raw));
  };

  return (
    <div className="App ">
      <h1 className="p-5 text-2xl font-medium bg-purple-200 text-indigo-900">
        Weather app
      </h1>
      {loading ? (
        <div className="LOADER_CONTAINER w-full h-3/4 flex justify-center items-center fixed z-10">
          <div className="SPINNER absolute w-40 h-40 rounded-full  bg-gradient-to-r p-[6px] from-transparent via-transparent to-slate-200 animate-spin"></div>
          <div className="SPINNER w-32 h-32 rounded-full  bg-white z-10"></div>
        </div>
      ) : (
        <div
          className="CONTAINER bg-no-repeat bg-cover animate-appearIn"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
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
      )}
    </div>
  );
}

export default App;
