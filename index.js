// Clock Javascript
setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    hrotation = 30*htime + mtime/2;
    mrotation = 6*mtime;
    srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);

//API Weather
const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '20ffbbb7c8msh737361b37e332d3p10f8ffjsn04380edf31bd',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	fetch(url, options)
		.then(response => response.text())
		.then((result) =>{
			console.log(result)
				cloud_pct.innerhtml= response.cloud_pct
				temp.innerhtml=response.temp
				feels_like.innerhtml= response.feels_like
				humidity.innerhtml= response.humidity
				min_temp.innerhtml= response.min_temp
				max_temp.innerhtml= response.max_temp
				wind_speed.innerhtml= response.wind_speed
				wind_degrees.innerhtml= response.wind_degrees
				sunrise.innerhtml= response.sunrise
				sunset.innerhtml= response.sunset
			
		} )
		.catch(error => console.error(error));
} catch (error) {
	console.error(error);
}

