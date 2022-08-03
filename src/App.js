import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

import WeatherCard from "./WeatherCard";
import {
  saveToLocalStorage,
  getFromLocalStorage,
} from "./utils/helperFunctions";

function App() {
  const initialState = getFromLocalStorage("weatherInfo");
  console.log("initial state", initialState);
  const [weatherInfo, setWeatherInfo] = useState(initialState);

  useEffect(() => {
    const { REACT_APP_API_KEY } = process.env;
    if (!weatherInfo) {
      console.log("fetching");
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=52.49386886692691&lon=13.492003531729805&appid=${REACT_APP_API_KEY}`
        )
        .then(({ data }) => {
          //save this info to local storage
          saveToLocalStorage("weatherInfo", data);
          setWeatherInfo(data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  console.log("wather info", weatherInfo);
  return (
    <div className="App">
      <h1>Weather Forecasts for {weatherInfo?.city.name}</h1>
      <main>
        {weatherInfo?.list.map((item, i) => (
          <WeatherCard {...item} key={i} />
        ))}
      </main>
    </div>
  );
}

export default App;
