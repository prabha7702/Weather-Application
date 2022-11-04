$(document).ready(()=>{
    $('#city').keyup(()=>{
        $('.warning').hide();
        $('#weather-data').hide();
    });
    $('#city-name').submit(()=>{
        let city=$('#city').val();
        if(city==""){
            $('#city-required').show();
        }
        else{
            $.ajax({
                url : `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cf93e3cccbe4ce9f8a240bfe88d6129a&units=metric`,
                type : 'GET',
                success : (data)=>{
                    $('#weather-data').html(`<h1>Weather in ${data.name}</h1>
                    <img src='https://openweathermap.org/img/w/${data.weather[0].icon}.png'>
                    <h2>${data.weather[0].main} (${data.weather[0].description})</h2><hr>
                    <p>Location : ${data.name}, ${data.sys.country}</p><hr>
                    <p>Temperature : ${data.main.temp}&deg;C</p><hr>
                    <p>Pressure : ${data.main.pressure} hPa</p><hr>
                    <p>Humidity : ${data.main.humidity}%</p><hr>
                    <p>Wind Speed : ${data.wind.speed} m/s</p><hr>
                    <p>Wind Direction : ${data.wind.deg} deg</p>`);
                    $('#weather-data').show();
                },
                error : ()=>{
                    $('#not-found').show();
                }
            });
        }
        return false;
    });
});