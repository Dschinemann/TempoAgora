import "./styles/App.css";
import InputCity from "./components/inputCity";
import DescriptionCity from "./components/descriptionCity";
import Forecast from "./components/forecast";
import * as service from "./services/search";
import { useState, useEffect } from "react";
import night from "./images/night.png";

function App() {
  const [city, setCity] = useState(null);

  const fetchCityIp = async () => {
    try {
      let resp = await service.getCityIp();
      setCity(resp.results);
    } catch (err) {
      console.log(err);
    }
  };

  const changeBackground = () => {
    if (city?.currently === "noite") {
      document.body.style.backgroundImage = `url(${night})`;
    }
  };

  useEffect(() => {
    fetchCityIp();
    changeBackground();
  }, []);

  return (
    <div className="container">
      <div>
        <InputCity />
        <DescriptionCity
          name={city?.city_name}
          description={city?.description}
          temp={city?.temp}
          time={city?.time}
          wind_speedy={city?.wind_speedy}
        />
      </div>
      <div className="list">
        <Forecast list={city?.forecast} />
      </div>
    </div>
  );
}

export default App;
