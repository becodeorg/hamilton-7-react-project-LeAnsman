import React from "react";

const WeatherDisplay = ({ cityInformations, city, weatherInformations }) => {
  // console.log(cityInformations);
  // console.log(weatherInformations);
  // console.log(cityInformations.name);

  return (
    <div>
      <h1 className="text-xl text-center">
        Here is the weather for{" "}
        <span className="capitalize">
          {city} in {cityInformations.country}
        </span>
      </h1>
    </div>
  );
};

export default WeatherDisplay;
