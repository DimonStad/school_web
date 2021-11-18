
async function find(){
	var weather;
	var city = document.querySelector("#city").value;
	var link =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d90e9570355188094b55bc4c9b6ea3e9&lang=ru`;
	await fetch (link)
	.then((resp)=>{
		return resp.json();
		
	})
	.then((data)=>{
		console.log(data);
		weather = data;
	})
	.catch(error=>alert(error.message))
	var p = document.querySelector("#weather");
	console.log(weather);
	p.innerHTML= weather.name + " " + Math.round(weather.main.temp -273.15) ;

}





