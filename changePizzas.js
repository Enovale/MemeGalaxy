function pizzaClicked(){
	if(localStorage.pizzaGalaxyPizzas){
		var clicks=Math.round(Number(localStorage.pizzaGalaxyPPS)/20);
		if(clicks === 0){
			clicks = 1
		}
		localStorage.pizzaGalaxyPizzas = Number(localStorage.pizzaGalaxyPizzas) + clicks
	}else{
		localStorage.pizzaGalaxyPizzas=1;
	}
document.getElementById("amountOfPizzas").innerHTML="You have "+localStorage.pizzaGalaxyPizzas+" pizzas"
}
function resetProgress(){
	localStorage.pizzaGalaxyPizzas=0;
	localStorage.pizzaGalaxyFires=0;
	localStorage.pizzaGalaxyLavas=0;
	localStorage.pizzaGalaxyDragons=0;
	localStorage.pizzaGalaxyMicrowaves=0;
	localStorage.pizzaGalaxyStoves=0;
	localStorage.pizzaGalaxyPrinters=0;
	localStorage.pizzaGalaxyFactories=0;
	localStorage.pizzaGalaxyNukes=0;
	localStorage.pizzaGalaxyHoles=0;
	localStorage.pizzaGalaxyGods=0;
	localStorage.pizzaGalaxyPPS=0;
	localStorage.pizzaGalaxyGP="false";
	document.getElementById("fireAmounts").innerHTML="You have "+localStorage.pizzaGalaxyFires+" of these"
	document.getElementById("lavaAmounts").innerHTML="You have "+localStorage.pizzaGalaxyLavas+" of these"
	document.getElementById("dragonAmounts").innerHTML="You have "+localStorage.pizzaGalaxyDragon+" of these"
	document.getElementById("microwaveAmounts").innerHTML="You have "+localStorage.pizzaGalaxyMicrowaves+" of these"
	document.getElementById("stoveAmounts").innerHTML="You have "+localStorage.pizzaGalaxyStoves+" of these"
	document.getElementById("printerAmounts").innerHTML="You have "+localStorage.pizzaGalaxyPrinters+" of these"
	document.getElementById("factoryAmounts").innerHTML="You have "+localStorage.pizzaGalaxyFactories+" of these"
	document.getElementById("nukeAmounts").innerHTML="You have "+localStorage.pizzaGalaxyNukes+" of these"
	document.getElementById("holeAmounts").innerHTML="You have "+localStorage.pizzaGalaxyHoles+" of these"
	document.getElementById("godsAmounts").innerHTML="You have "+localStorage.pizzaGalaxyGods+" of these"
	document.getElementById("amountOfPizzas").innerHTML="You have "+localStorage.pizzaGalaxyPizzas+" pizzas"
	document.getElementById("pps").innerHTML="Your pizzas per second is "+localStorage.pizzaGalaxyPPS
}