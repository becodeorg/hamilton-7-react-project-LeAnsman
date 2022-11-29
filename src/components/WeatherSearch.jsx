import React, { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const WeatherSearch = ({ onSearchChange }) => {
  const geoApiOptions = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a423f10b2dmshe3cef46158a399ep1a2a62jsn1b843c27ebf8",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };

  const [search, setSearch] = useState(null);

  const loadOptions = async (inputValue) => {
    // look in network to see that the fetch is actually successful
    try {
      const res = await fetch(
        `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?minPopulation=200000&namePrefix=${inputValue}`,
        geoApiOptions
      );
      const res_1 = await res.json();
      return {
        options: res_1.data.map((item) => {
          return {
            value: `${item.latitude} ${item.longitude}`,
            label: `${item.name}, ${item.countryCode}`,
          };
        }),
      };
    } catch (err) {
      return console.error(err);
    }
  };

  const onChangeHandler = async (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };

  return (
    <div>
      <AsyncPaginate
        className="w-3/4 mx-auto"
        placeholder="Search for a city"
        // don't call the fetch every time a key is pressed
        debounceTimeout={600}
        value={search}
        onChange={onChangeHandler}
        // loading through async function
        loadOptions={loadOptions}
      />
    </div>
  );
};

export default WeatherSearch;
