$(document).ready(function () {
  //search for a city, view current weather conditions for that city
  // presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index

  $.ajax({
    url: "",
    type: "GET",
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
