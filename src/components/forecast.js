function Forecast(props) {
  if (props.list) {
    return props.list.map((ele, index) => (
      <li key={index}>
        <div className="daylist">
          <h2 className="fs-3">{ele.date}</h2>
          <h3 className="fs-3">{ele.weekday}</h3>
        </div>
        <hr />
        <div className="cntr-temperature">
          <h4 className="fs-4">Temperatura</h4>
          <div className="min-max-temp">
            <p>max: {ele.max}º</p>
            <p>min: {ele.min}</p>
          </div>
        </div>
        <hr />
        <div>
          <h4 className="fs-4">Condição do tempo</h4>
          <p>{ele.description}</p>
        </div>
      </li>
    ));
  } else {
    <div></div>;
  }
}

export default Forecast;
