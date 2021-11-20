
async function find(arg){
	var weather;
	var city = arg;
	if (!city) {
		alert("Поле пустое");
	}
	else{	
		var link =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d90e9570355188094b55bc4c9b6ea3e9&lang=ru`;
		await fetch (link)
		.then((resp)=>{
			if (!resp.ok){
				alert("Город не найден");
			}
			else{return resp.json();}			
		})
		.then((data)=>{
			console.log(data);
			weather = data;
		})
		.catch(error=>alert(error.message))
		var p = document.querySelector("#weather");
		console.log(weather);
		p.innerHTML= weather.name + " " + Math.round(weather.main.temp -273.15) + '&deg' + "C";
		return p.innerHTML;
	}												
}





