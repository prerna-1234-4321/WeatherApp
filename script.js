```js
document.getElementById('getWeather').addEventListener('click', () => {
  const city = document.getElementById('cityInput').value;
  const apiKey = '8edd114dcf8dca78396c177eade781f2'; 

  const url = https://api.openweathermap.org/data/2.5/weather?q=city   appid={apiKey}&units=metric;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if(data.cod === 200) {
document.getElementById('weatherResult').innerHTML = `
          <h2>data.name,{data.sys.country}</h2>
          <p>Temperature: data.main.temp °C</p>
          <p>Weather:{data.weather[0].main}</p>
          <p>Humidity: ${data.main.humidity} %</p>
        `;
      } else {
        document.getElementById('weatherResult').innerHTML = <p>City not found!</p>;
      }
    })
    .catch(() => {
      document.getElementById('weatherResult').innerHTML = <p>Error fetching data.</p>;
    });
});
```
