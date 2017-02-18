function restoreProgress(){
	if(localStorage.pizzaGalaxyPPS){
		document.getElementById("fireAmounts").innerHTML="You have "+localStorage.pizzaGalaxyFires+" of these"
		document.getElementById("lavaAmounts").innerHTML="You have "+localStorage.pizzaGalaxyLavas+" of these"
		document.getElementById("dragonAmounts").innerHTML="You have "+localStorage.pizzaGalaxyDragons+" of these"
		document.getElementById("microwaveAmounts").innerHTML="You have "+localStorage.pizzaGalaxyMicrowaves+" of these"
		document.getElementById("stoveAmounts").innerHTML="You have "+localStorage.pizzaGalaxyStoves+" of these"
		document.getElementById("printerAmounts").innerHTML="You have "+localStorage.pizzaGalaxyPrinters+" of these"
		document.getElementById("factoryAmounts").innerHTML="You have "+localStorage.pizzaGalaxyFactories+" of these"
		document.getElementById("nukeAmounts").innerHTML="You have "+localStorage.pizzaGalaxyNukes+" of these"
		document.getElementById("godAmounts").innerHTML="You have "+localStorage.pizzaGalaxyGods+" of these"
		document.getElementById("amountOfPizzas").innerHTML="You have "+localStorage.pizzaGalaxyPizzas+" pizzas"
		document.getElementById("pps").innerHTML="Your pizzas per second is "+localStorage.pizzaGalaxyPPS
		restoreFires()
		restoreLavas()
		restoreDragons()
		restoreMicrowaves()
		restoreStoves()
		restorePrinters()
		restoreFactories()
		restoreNukes()
		restoreHoles()
		restoreGods()
		calcPPS()
	}else{
		localStorage.pizzaGalaxyPizzas=0
		localStorage.pizzaGalaxyFires=0
		localStorage.pizzaGalaxyLavas=0
		localStorage.pizzaGalaxyDragons=0
		localStorage.pizzaGalaxyMicrowaves=0
		localStorage.pizzaGalaxyStoves=0
		localStorage.pizzaGalaxyPrinters=0
		localStorage.pizzaGalaxyFactories=0
		localStorage.pizzaGalaxyNukes=0
		localStorage.pizzaGalaxyHoles=0
		localStorage.pizzaGalaxyGods=0
		localStorage.pizzaGalaxyPPS=0
		restoreProgress()
	}

}
function restoreFires(){
document.getElementById("fireAmounts").innerHTML="You have "+localStorage.pizzaGalaxyFires+" of these"
	setInterval(function(){
		localStorage.pizzaGalaxyPizzas=Number(localStorage.pizzaGalaxyPizzas)+Number(localStorage.pizzaGalaxyFires)*4
		document.getElementById("amountOfPizzas").innerHTML="You have "+localStorage.pizzaGalaxyPizzas+" pizzas"
	},20000);
}
function restoreLavas(){
	document.getElementById("lavaAmounts").innerHTML="You have "+localStorage.pizzaGalaxyLavas+" of these"
	setInterval(function(){
		localStorage.pizzaGalaxyPizzas=Number(localStorage.pizzaGalaxyPizzas)+Number(localStorage.pizzaGalaxyLavas)*4
		document.getElementById("amountOfPizzas").innerHTML="You have "+localStorage.pizzaGalaxyPizzas+" pizzas"
	},5000);
}
function restoreDragons(){
	document.getElementById("dragonAmounts").innerHTML="You have "+localStorage.pizzaGalaxyDragons+" of these"
	setInterval(function(){
		localStorage.pizzaGalaxyPizzas=Number(localStorage.pizzaGalaxyPizzas)+Number(localStorage.pizzaGalaxyDragons)*12
		document.getElementById("amountOfPizzas").innerHTML="You have "+localStorage.pizzaGalaxyPizzas+" pizzas"
	},5000);
}
function restoreMicrowaves(){
	document.getElementById("microwaveAmounts").innerHTML="You have "+localStorage.pizzaGalaxyMicrowaves+" of these"
	setInterval(function(){
		localStorage.pizzaGalaxyPizzas=Number(localStorage.pizzaGalaxyPizzas)+Number(localStorage.pizzaGalaxyMicrowaves)*160
		document.getElementById("amountOfPizzas").innerHTML="You have "+localStorage.pizzaGalaxyPizzas+" pizzas"
	},30000);
}
function restoreStoves(){
	document.getElementById("stoveAmounts").innerHTML="You have "+localStorage.pizzaGalaxyStoves+" of these"
	setInterval(function(){
		localStorage.pizzaGalaxyPizzas=Number(localStorage.pizzaGalaxyPizzas)+Number(localStorage.pizzaGalaxyStoves)*400
		document.getElementById("amountOfPizzas").innerHTML="You have "+localStorage.pizzaGalaxyPizzas+" pizzas"
	},4000);
}
function restorePrinters(){
	document.getElementById("printerAmounts").innerHTML="You have "+localStorage.pizzaGalaxyPrinters+" of these"
	setInterval(function(){
		localStorage.pizzaGalaxyPizzas=Number(localStorage.pizzaGalaxyPizzas)+Number(localStorage.pizzaGalaxyPrinters)*600
		document.getElementById("amountOfPizzas").innerHTML="You have "+localStorage.pizzaGalaxyPizzas+" pizzas"
	},1000);
}
function restoreFactories(){
	document.getElementById("factoryAmounts").innerHTML="You have "+localStorage.pizzaGalaxyFactories+" of these"
	setInterval(function(){
		localStorage.pizzaGalaxyPizzas=Number(localStorage.pizzaGalaxyPizzas)+Number(localStorage.pizzaGalaxyFactories)*500
		document.getElementById("amountOfPizzas").innerHTML="You have "+localStorage.pizzaGalaxyPizzas+" pizzas"
	},100);
}
function restoreNukes(){
	document.getElementById("nukeAmounts").innerHTML="You have "+localStorage.pizzaGalaxyNukes+" of these"
	setInterval(function(){
		localStorage.pizzaGalaxyPizzas=Number(localStorage.pizzaGalaxyPizzas)+Number(localStorage.pizzaGalaxyNukes)*500000
		document.getElementById("amountOfPizzas").innerHTML="You have "+localStorage.pizzaGalaxyPizzas+" pizzas"
	},20000);
}
function restoreHoles(){
	document.getElementById("holeAmounts").innerHTML="You have "+localStorage.pizzaGalaxyHoles+" of these"
	setInterval(function(){
		localStorage.pizzaGalaxyPizzas=Number(localStorage.pizzaGalaxyPizzas)+Number(localStorage.pizzaGalaxyHoles)*400000
		document.getElementById("amountOfPizzas").innerHTML="You have "+localStorage.pizzaGalaxyPizzas+" pizzas"
	},3000);
}
function restoreGods(){
	document.getElementById("godAmounts").innerHTML="You have "+localStorage.pizzaGalaxyGods+" of these"
	setInterval(function(){
		localStorage.pizzaGalaxyPizzas=Number(localStorage.pizzaGalaxyPizzas)+Number(localStorage.pizzaGalaxyGods)*10000
		document.getElementById("amountOfPizzas").innerHTML="You have "+localStorage.pizzaGalaxyPizzas+" pizzas"
	},1);
}