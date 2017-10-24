class Forecast {    
    getForecast() {
        let cityList = document.querySelector('.navigation_dropdown');
        let city = cityList.options[cityList.selectedIndex].value;
        fetch('http://api.wunderground.com/api/29cd132c758781b3/forecast/q/Poland/'+city+'.json')
        .then(response => response.json())
        .then(result => {
            //console.log(result);
            document.querySelector('.section_left_desc').innerHTML = result.forecast.txt_forecast.forecastday[0].fcttext;
            //Day1
            document.querySelector('.section_right_r1c1').innerHTML = result.forecast.simpleforecast.forecastday[1].date.weekday;
            document.querySelector('.section_right_r1c2i').src = result.forecast.simpleforecast.forecastday[1].icon_url;
            document.querySelector('.section_right_r1c3').innerHTML = result.forecast.simpleforecast.forecastday[1].high.celsius + ' °C';
            document.querySelector('.section_right_r1c4').innerHTML = result.forecast.simpleforecast.forecastday[1].low.celsius + ' °C';                    
            //Day2
            document.querySelector('.section_right_r2c1').innerHTML = result.forecast.simpleforecast.forecastday[2].date.weekday;
            document.querySelector('.section_right_r2c2i').src = result.forecast.simpleforecast.forecastday[2].icon_url;
            document.querySelector('.section_right_r2c3').innerHTML = result.forecast.simpleforecast.forecastday[2].high.celsius + ' °C';
            document.querySelector('.section_right_r2c4').innerHTML = result.forecast.simpleforecast.forecastday[2].low.celsius + ' °C';       
            //Day3
            document.querySelector('.section_right_r3c1').innerHTML = result.forecast.simpleforecast.forecastday[3].date.weekday;
            document.querySelector('.section_right_r3c2i').src = result.forecast.simpleforecast.forecastday[3].icon_url;
            document.querySelector('.section_right_r3c3').innerHTML = result.forecast.simpleforecast.forecastday[3].high.celsius + ' °C';
            document.querySelector('.section_right_r3c4').innerHTML = result.forecast.simpleforecast.forecastday[3].low.celsius + ' °C';
        })
        .catch(error => console.error(error));      
    }
}

module.exports = Forecast;