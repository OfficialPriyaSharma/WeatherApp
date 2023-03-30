const apiKey = "Search on Google Codewithrandom you get api key";

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

const url = (city)=> 'https://api.openweathermap.org/data/2.5/weather?q=$(city)&appid=${apikey}';

