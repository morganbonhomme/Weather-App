import React, { Component } from "react";
import classes from "./App.module.css";
import Input from "../components/input/input";
import Weather from "../components/weather/weather";

//load here
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityName: "Paris",
      weather: {}
    };
    this.getCityNameHandler = this.getCityNameHandler.bind(this);
    this.getWeatherData = this.getWeatherData.bind(this);
  }

  getCityNameHandler(event) {
    event.preventDefault();
    const input = document.querySelector("input");
    this.setState({ cityName: input.value });
    this.getWeatherData(input.value);
    input.value = ""
  }

  getWeatherData(city) {
    const APIKEY = process.env.REACT_APP_APIKEY;
    console.log(APIKEY);
    const weatherURL = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${APIKEY}&q=${city.toLowerCase()}`;

    const getWeather = async () => {
      try {
        const response = await fetch(weatherURL, { mode: "cors" });
        if (!response.ok) {
          alert("Sorry the city was misspelled, try again")
        } else {
          const weatherData = await response.json();

          this.setState ({ weather: weatherData
          })
        }
      } catch (err) {
        alert(err);
      }
    };

  getWeather()
  }

  componentDidMount() {
  this.getWeatherData(this.state.cityName)
  };

  render() {
    if (!this.state.weather.weather) {
      return null;
      
  }
    return (
      <div className={classes.App}>
        <h1 id={classes.title}>What's the weather today ?</h1>
        <Input citySubmitted={this.getCityNameHandler} />
        <Weather weather={this.state.weather} />
      </div>
    );
  }
}

export default App;
