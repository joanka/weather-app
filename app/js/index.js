import '../css/main.css';
import Conditions from './conditions';
import Forecast from './forecast';

const loadWeather = () => {
    const conditions = new Conditions();
    const forecast = new Forecast();
    conditions.getWeather();  
    forecast.getForecast();   
};

const btnCta = document.querySelector('.navigation_dropdown');
btnCta.addEventListener('change', loadWeather);


 