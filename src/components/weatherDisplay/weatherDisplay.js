import React, { Component } from "react";
import classes from "./weatherDisplay.module.css";
import clearSkyDay from "../../assets/01d.svg";
import clearSkyNight from "../../assets/01n.svg";
import fewCloudsDay from "../../assets/02d.svg";
import fewCloudsNight from "../../assets/02n.svg";
import scatteredClouds from "../../assets/03d.svg";
import showerRainDay from "../../assets/09d.svg";
import rainDay from "../../assets/10d.svg";
import thunderstorm from "../../assets/11d.svg";
import snow from "../../assets/13n.svg";
import fogDay from "../../assets/50d.svg";
import fogNight from "../../assets/50n.svg";

const weatherDisplay = (props) => {
  let imagePath;

  switch (props.icon) {
    case "01d":
      imagePath = clearSkyDay;
      break;
    case "01n":
      imagePath = clearSkyNight;
      break;
    case "02d":
      imagePath = fewCloudsDay;
      break;
    case "02n":
      imagePath = fewCloudsNight;
      break;
    case "03d":
    case "03n":
    case "04d":
    case "04n":
      imagePath = scatteredClouds;
      break;
    case "09d":
    case "09n":
      imagePath = showerRainDay;
      break;
    case "10d":
    case "10n":
      imagePath = rainDay;
      break;
    case "11d":
    case "11n":
      imagePath = thunderstorm;
      break;
    case "13d":
    case "13n":
      imagePath = snow;
      break;
    case "50d":
      imagePath = fogDay;
      break;
    case "50n":
      imagePath = fogNight;
      break;
    default:
      break;
  }

  return (
    <div className={classes.container}>
      <h2> Today's weather in {props.cityName} :</h2>
      <img src={imagePath} alt={props.description} className={classes.icon} />
      <div className={classes.temperature}>
        {Math.round(props.temperature * 10) / 10}°C
      </div>
    </div>
  );
};

export default weatherDisplay;
