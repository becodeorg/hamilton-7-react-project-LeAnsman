import React from "react";
import ForecastWeather from "./ForecastWeather";

const forecastList = ({ forecastArr, weatherInformations }) => {
  // console.log(forecastArr);
  return (
    <div>
      {weatherInformations.length > 0 && (
        <>
          {/* <ul>{weatherInformations.length > 0 && <ForecastWeather forecastArr={forecastArr} />}</ul> */}
          <ul className="flex flex-col items-center py-5 gap-5">
            {/* If there is a forecastArr then --> */}
            {forecastArr?.map((day) => (
              <ForecastWeather day={day} id={day.dt} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default forecastList;
