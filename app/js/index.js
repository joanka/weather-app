import '../css/main.css';
import Conditions from './conditions';
import Forecast from './forecast';

const conditions = new Conditions();
const forecast = new Forecast();
conditions.getWeather();  
forecast.getForecast();  




 