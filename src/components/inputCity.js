import "../styles/home.css";
import "../styles/App.css";
import "../styles/bootstrap.min.css";
import { useState } from "react";
import * as service from "../services/search";

function InputCity(params) {
  const [city, setCity] = useState(null);
  const [state, setState] = useState(null);

  const fetchCity = async (city, state) => {
    try {
      let resp = await service.getCity(city, state);
      setCity(resp.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="input-city">
      <label className="form-label" htmlFor="input-city">
        Cidade
      </label>
      <input
        className="form-control"
        id="city-name"
        placeholder="Informe o nome da Cidade que deseja pequisar!"
        onChange={(e) => setCity(e.target.value)}
      />
      <label className="form-label" htmlFor="state-name">
        Estado
      </label>
      <input
        className="form-control"
        id="state-name"
        placeholder="Informe o estado da Cidade que deseja pequisar!"
        onChange={(e) => setState(e.target.value)}
      />
      <button
        className="btn btn-primary"
        onClick={() => fetchCity(city, state)}
      >
        Procurar
      </button>
    </div>
  );
}
export default InputCity;
