import React from "react";
import ForecastWeather from "./ForecastWeather";

const forecastList = ({ forecastArr }) => {
  // console.log(forecastArr);
  return (
    <div>
      {/* <ul>{weatherInformations.length > 0 && <ForecastWeather forecastArr={forecastArr} />}</ul> */}
      <ul>
        {forecastArr?.map((day) => (
          <ForecastWeather day={day} />
        ))}
      </ul>
    </div>
  );
};

export default forecastList;
