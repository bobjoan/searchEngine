import React, { useState } from "react";
import axios from "axios";
import "./styles.css";

export default function SearchEngine(props) {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState(null);
  const [searchResults, setSearchResults] = useState("");

  function showTemperature(response) {
    setSearchResults({
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f3009e4852fa0a079dab291dabf020c4&units=metric`;

    axios.get(url).then(showTemperature);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  return (
    <div className="SearchEngine">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city"
          required
          onChange={updateCity}
        />
        <input type="submit" value="Search" />
      </form>

      {searchResults && (
        <ul>
          <li>
            Temperature:{" "}
            <strong>{Math.round(searchResults.temperature)}°C</strong>
          </li>
          <li>Description: {searchResults.description}</li>
          <li>Humidity: {searchResults.humidity}%</li>
          <li>Wind: {searchResults.wind}km/h</li>
          <li>
            <img src={searchResults.icon} alt="weather icon" />
          </li>
        </ul>
      )}
      <footer>
        <p>
          This project is open-sourced on{" "}
          <a href="https://github.com/bobjoan/searchEngine">Github</a> and
          hosted on{" "}
          <a href="https://vercel.com/bob-joans-projects/search-engine">
            Vercel
          </a>{" "}
        </p>
      </footer>
    </div>
  );
}
