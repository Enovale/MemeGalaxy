setInterval(function(){
	pizzas = localStorage.pizzaGalaxyPPS
	if(pizzas>1){
		document.getElementById("news").innerHTML = "Your neighbours came over to try your pizza"
	}
	if(pizzas>6){
		document.getElementById("news").innerHTML = "Yo makin' cash"
	}
	if(pizzas>20){
		document.getElementById("news").innerHTML = "You opened a restaurant"
	}
	if(pizzas>100){
		document.getElementById("news").innerHTML = "People want to work for you"
	}
	if(pizzas>200){
		document.getElementById("news").innerHTML = "Your pizzas are bought for school lunches"
	}
	if(pizzas>300){
		document.getElementById("news").innerHTML = "The whole city knows about your pizza"
	}
	if(pizzas>1000){
		document.getElementById("news").innerHTML = "People come from a different state to try your pizza"
	}
	if(pizzas>2000){
		document.getElementById("news").innerHTML = "Your pizzas are in the national newspaper"
	}
	if(pizzas>4000){
		document.getElementById("news").innerHTML = "Anyone within 30 miles has tried your pizzas"
	}
	if(pizzas>8000){
		document.getElementById("news").innerHTML = "Your pizzas are now world famous"
	}
	if(pizzas>50000){
		document.getElementById("news").innerHTML = "Many countries start war with you to get your pizzas"
	}
	if(pizzas>200000){
		document.getElementById("news").innerHTML = "Your pizzas are taking over the planet"
	}
	if(pizzas>500000){
		document.getElementById("news").innerHTML = "Your pizzas blew up the sun"
	}
	if(pizzas>1000000){
		document.getElementById("news").innerHTML = "Your pizzas took over the galaxy"
	}
	if(pizzas>10000000){
		document.getElementById("news").innerHTML = "Your pizzas are reshaping the universe"
	}
	if(pizzas>150000000){
		document.getElementById("news").innerHTML = "The universe is made of pizzas"
	}
	if(pizzas>1000000000){
		document.getElementById("news").innerHTML = "Your pizzas are taking over the entire Multiverse!!!"
	}
	if(localStorage.pizzaGalaxyGP==="true"){
		document.getElementById("news").innerHTML = "You found the golden pizza(You won)"
	}
	if(pizzas>1000000000000){
		document.getElementById("news").innerHTML = "It's time to stop playing!!!"
	}
},1000);