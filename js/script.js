const apiKey = "Search on Google Codewithrandom you get api key";

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

const url = (city)=> 'https://api.openweathermap.org/data/2.5/weather?q=$(city)&appid=${apikey}';

async function getWeatherByLocation(city){

    const resp = await fetch(url(city),{
        origin: "cros" });

        const respData = await resp.json();

        addWeatherTopage(respData);
    }

    function addWeatherTopage(data){
        const temp = Ktoc(data.main.temp);

        const weather = document.createElement('div')
        weather.classList.add('weather');

        weather.innerHTML = `
                    <h2><img src = "https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" />
                    )`
    }