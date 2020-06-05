$(document).ready(function () {
  //search for a city, view current weather conditions for that city

  const getWeather = async function (url) {
    let response = await fetch(url);
    return response.json();
  };

  const searchList = [];
  const apiKey = "6331b558a2d7fa66a892d8e22187e11a";

  $(".search-bar").submit(async function (event) {
    event.preventDefault();
    var userInput = $("#user-input").val();
    console.log(userInput);

    const url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      userInput +
      "&appid=" +
      apiKey;

    let weatherData = await getWeather(url);
    console.log(weatherData);

    // try {
    //   var response = await fetch(url);
    //   var data = await response.json();
    // } catch (error) {
    //   throw Error("fetching weather api failed");
    //
    //   .then(function (data) {
    //     console.log(data);
    //   })

    //   .catch(function (error) {
    //     console.log(error);
    //   });

    //variables from the data
    var cityName = weatherData.name;
    console.log(cityName);

    var temperatureKelvin = weatherData.main.temp;
    var tempConverted = ((temperatureKelvin - 273.15) * 9) / 5 + 32;
    var date = new Date();
    var humidity = weatherData.main.humidity;
    var windSpeed = weatherData.wind.speed;
    // var uvIndex = ;

    // presented with the city name, the date, the temperature, the humidity, the wind speed, and the UV index; an icon representation of weather conditions
  });
});

// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
// WHEN I open the weather dashboard
// THEN I am presented with the last searched city forecast
