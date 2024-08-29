let btn=document.querySelector('button')
btn.addEventListener('click',async()=>{

try {
	let input=document.querySelector('input')
	const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${input.value}&days=3`;
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Key': '0862308262msh8650a2b795e15efp11a1e6jsn3ffa00de2842',
			'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
		}
	};

	const response = await fetch(url, options);
	const result = await response.json();
	// let Day=result.forecast.forecastday[0].day.maxtemp_c

	let Temp=result.current.temp_c;
	let City=result.location.name;
	let Humidity=result.current.humidity;

    if (Temp < 10) {
        WeatherIcon = "pluie.png";
    } else if (Temp >= 10 && Temp < 25) {
        WeatherIcon = "sun.png"; 
    } else {
        WeatherIcon = "cloudy.png"; 
    }


    // document.getElementById("Days").innerHTML=`<img class="fas fa-sun"><i/> ${Day}`;
	document.getElementById("City").innerHTML=`City:${City}`
	document.getElementById("Temp").innerHTML=`<img src="temperature.gif"alt="Temperature GIF"> Temp:${Temp}°C`
	document.getElementById("Humi").innerHTML=`<img src= "humidity.gif"alt="Humidity GIF"> Humidity:${Humidity}%`
	
	console.log(result);
} catch (error) {
	console.error(error);
}

})







