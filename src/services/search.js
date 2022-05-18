export async function getCity(city, state) {
  console.log(city, state);
  let url = "http://127.0.0.1:8000/cityName?";
  let response = await fetch(`${url}${city},${state}`);
  let data = await response.json();
  return data;
}

export async function getCityIp() {
  let url = "http://127.0.0.1:8000/user_ip?";
  let response = await fetch(`${url}${await getIp()}`);
  let data = await response.json();
  return data;
}

async function getIp() {
  let url = "https://geolocation-db.com/json/";
  let response = await fetch(url);
  let data = await response.json();
  return data.IPv4;
}
