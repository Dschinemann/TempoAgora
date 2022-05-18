function DescriptionCity(params) {
  return (
    <section className="container-descripton">
      <h1 className="fs-3">Cidade: {params.name}</h1>
      <h1 className="fs-3">Tempo: {params.description}</h1>
      <h1 className="fs-3">Temperatura: {params.temp}</h1>
      <h1 className="fs-3">Hora: {params.time}h.</h1>
      <h1 className="fs-3">Velocidade do vento {params.wind_speedy}</h1>
    </section>
  );
}

export default DescriptionCity;
