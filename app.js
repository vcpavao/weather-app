import * as ELEMENTS from 'scripts.js';

ELEMENTS.ELEMENT_SEARCH_BUTTON.addEventListener('click', searchWeather);

function searchWeather() {
  //Retrieve user input
  const CITY_NAME = ELEMENTS.ELEMENT_SEARCHED_CITY.value;
  if(CITY_NAME.length === 0) {
    return alert('Please enter a city name.');
  }
}
