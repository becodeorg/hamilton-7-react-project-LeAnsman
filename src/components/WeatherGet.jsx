import React, { useEffect, useRef } from "react";
import axios from "axios";

const WeatherInput = ({
  city,
  setCity,
  setCityInformations,
  setWeatherInformations,
}) => {
  const inputRef = useRef();

  const initialRender = useRef(true);

  let latitude = "";
  let longitude = "";

  // useEffect(() => {
  //   if (initialRender.current) {
  //     initialRender.current = false;
  //   } else {
  //     // declare the data fetching functions
  //     const getCityInfo = async () => {
  //       //get the response with axios.get
  //       await axios
  //         .get(
  //           `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=e18fa0a15f3c9567b66e08d31f967278`
  //         )
  //         .catch((err) => console.log(err))

  //         .then((res) => {
  //           latitude = res.data[0].lat;
  //           longitude = res.data[0].lon;
  //         });
  //       return await axios
  //         .get(
  //           `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=e18fa0a15f3c9567b66e08d31f967278`
  //         )
  //         .then((res) => {
  //           setWeatherInformations(res.data.list);
  //           setCityInformations(res.data.city);
  //         });
  //     };
  //     // call the function
  //     getCityInfo()
  //       // make sure to catch any error
  //       .catch(console.error);
  //   }
  // }, [city]); // [] = callback

  const onChangeHandler = () => {
    setCity(inputRef.current.value);
  };

  const getCityInfo = async (e) => {
    e.preventDefault();
    //get the response with axios.get
    await axios
      .get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=e18fa0a15f3c9567b66e08d31f967278`
      )
      .catch((err) => console.log(err))

      .then((res) => {
        latitude = res.data[0].lat;
        longitude = res.data[0].lon;
      });
    return await axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=e18fa0a15f3c9567b66e08d31f967278`
      )
      .then((res) => {
        setWeatherInformations(res.data.list);
        setCityInformations(res.data.city);
      });
  };

  return (
    <div>
      <form className="p-5 flex justify-center">
        <input
          className="px-4 py-2 border-2 border-purple-600 rounded-l-lg focus:outline-none"
          type="text"
          placeholder="Type the city"
          ref={inputRef}
          onChange={onChangeHandler}
        ></input>
        <button
          onClick={getCityInfo}
          className="px-4 py-2 border-2 border-purple-600 text-indigo-900 rounded-r-lg hover:bg-purple-600 hover:text-white"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default WeatherInput;
