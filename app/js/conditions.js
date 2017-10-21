class Conditions {
    getWeather() {
        fetch('http://api.wunderground.com/api/29cd132c758781b3/conditions/q/Poland/Warsaw.json')
        .then(response => response.json())
        .then(result => {
            //console.log(result);
            document.querySelector('.section_left_location').innerHTML = result.current_observation.display_location.full;
            document.querySelector('.section_left_weather').innerHTML = result.current_observation.weather;
            document.querySelector('.section_left_temperature').innerHTML = result.current_observation.temp_c;
        })
        .catch(error => console.error(error));  
    }
}

module.exports = Conditions;