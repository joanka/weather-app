class Conditions {
    getWeather() {
        let cityList = document.querySelector('.navigation_dropdown');
        let city = cityList.options[cityList.selectedIndex].value;
        fetch('http://api.wunderground.com/api/29cd132c758781b3/conditions/q/Poland/'+city+'.json')
        .then(response => response.json())
        .then(result => {
            //console.log(result);
            document.querySelector('.section_left_location').innerHTML = result.current_observation.display_location.full;
            document.querySelector('.section_left_weather').innerHTML = result.current_observation.weather;
            document.querySelector('.section_left_temperature').innerHTML = result.current_observation.temp_c + ' °C';
        })
        .catch(error => console.error(error));  
    }
}

module.exports = Conditions;