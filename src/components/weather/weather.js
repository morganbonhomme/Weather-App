import React from "react";
import WeatherDisplay from "../weatherDisplay/weatherDisplay";

const weather = (props) => {

  let weatherData = props.weather;
  
  let description = weatherData.weather[0].description;
  let icon = weatherData.weather[0].icon;
  let temperature = weatherData.main.temp;
  let cityName = weatherData.name;

  let display = (
    <WeatherDisplay
      description={description}
      icon={icon}
      temperature={temperature}
      cityName={cityName}
    />
  );
  return display;
};

export default weather;
