function buyFire(){
	if(Number(localStorage.pizzaGalaxyPizzas)>19){
		localStorage.pizzaGalaxyPizzas=Number(localStorage.pizzaGalaxyPizzas)-20
		document.getElementById("amountOfPizzas").innerHTML="You have "+localStorage.pizzaGalaxyPizzas+" pizzas"
		localStorage.pizzaGalaxyFires=Number(localStorage.pizzaGalaxyFires)+1
		document.getElementById("fireAmounts").innerHTML="You have "+localStorage.pizzaGalaxyFires+" of these"
		calcPPS()
	}else{
		alert("You cannot afford this")
	}
}
function buyLava(){
	if(Number(localStorage.pizzaGalaxyPizzas)>74){
		localStorage.pizzaGalaxyPizzas=Number(localStorage.pizzaGalaxyPizzas)-75
		document.getElementById("amountOfPizzas").innerHTML="You have "+localStorage.pizzaGalaxyPizzas+" pizzas"
		localStorage.pizzaGalaxyLavas=Number(localStorage.pizzaGalaxyLavas)+1
		document.getElementById("lavaAmounts").innerHTML="You have "+localStorage.pizzaGalaxyLavas+" of these"
		calcPPS()
	}else{
		alert("You cannot afford this")
	}
}
function buyDragon(){
	if(Number(localStorage.pizzaGalaxyPizzas)>249){
		localStorage.pizzaGalaxyPizzas=Number(localStorage.pizzaGalaxyPizzas)-250
		document.getElementById("amountOfPizzas").innerHTML="You have "+localStorage.pizzaGalaxyPizzas+" pizzas"
		localStorage.pizzaGalaxyDragons=Number(localStorage.pizzaGalaxyDragons)+1
		document.getElementById("dragonAmounts").innerHTML="You have "+localStorage.pizzaGalaxyDragons+" of these"
		calcPPS()
	}else{
		alert("You cannot afford this")
	}
}
function buyMicrowave(){
	if(Number(localStorage.pizzaGalaxyPizzas)>499){
		localStorage.pizzaGalaxyPizzas=Number(localStorage.pizzaGalaxyPizzas)-500
		document.getElementById("amountOfPizzas").innerHTML="You have "+localStorage.pizzaGalaxyPizzas+" pizzas"
		localStorage.pizzaGalaxyMicrowaves=Number(localStorage.pizzaGalaxyMicrowaves)+1
		document.getElementById("microwaveAmounts").innerHTML="You have "+localStorage.pizzaGalaxyMicrowaves+" of these"
		calcPPS()
	}else{
		alert("You cannot afford this")
	}
}
function buyStove(){
	if(Number(localStorage.pizzaGalaxyPizzas)>9999){
		localStorage.pizzaGalaxyPizzas=Number(localStorage.pizzaGalaxyPizzas)-10000
		document.getElementById("amountOfPizzas").innerHTML="You have "+localStorage.pizzaGalaxyPizzas+" pizzas"
		localStorage.pizzaGalaxyStoves=Number(localStorage.pizzaGalaxyStoves)+1
		document.getElementById("stoveAmounts").innerHTML="You have "+localStorage.pizzaGalaxyStoves+" of these"
		calcPPS()
	}else{
		alert("You cannot afford this")
	}
}
function buyPrinter(){
	if(Number(localStorage.pizzaGalaxyPizzas)>59999){
		localStorage.pizzaGalaxyPizzas=Number(localStorage.pizzaGalaxyPizzas)-60000
		document.getElementById("amountOfPizzas").innerHTML="You have "+localStorage.pizzaGalaxyPizzas+" pizzas"
		localStorage.pizzaGalaxyPrinters=Number(localStorage.pizzaGalaxyPrinters)+1
		document.getElementById("printerAmounts").innerHTML="You have "+localStorage.pizzaGalaxyPrinters+" of these"
		calcPPS()
	}else{
		alert("You cannot afford this")
	}
}
function buyFactory(){
	if(Number(localStorage.pizzaGalaxyPizzas)>499999){
		localStorage.pizzaGalaxyPizzas=Number(localStorage.pizzaGalaxyPizzas)-500000
		document.getElementById("amountOfPizzas").innerHTML="You have "+localStorage.pizzaGalaxyPizzas+" pizzas"
		localStorage.pizzaGalaxyFactories=Number(localStorage.pizzaGalaxyFactories)+1
		document.getElementById("factoryAmounts").innerHTML="You have "+localStorage.pizzaGalaxyFactories+" of these"
		calcPPS()
	}else{
		alert("You cannot afford this")
	}
}
function buyNuke(){
	if(Number(localStorage.pizzaGalaxyPizzas)>2499999){
		localStorage.pizzaGalaxyPizzas=Number(localStorage.pizzaGalaxyPizzas)-2500000
		document.getElementById("amountOfPizzas").innerHTML="You have "+localStorage.pizzaGalaxyPizzas+" pizzas"
		localStorage.pizzaGalaxyNukes=Number(localStorage.pizzaGalaxyNukes)+1
		document.getElementById("nukeAmounts").innerHTML="You have "+localStorage.pizzaGalaxyNukes+" of these"
		calcPPS()
	}else{
		alert("You cannot afford this")
	}
}
function buyHole(){
	if(Number(localStorage.pizzaGalaxyPizzas)>14999999){
		localStorage.pizzaGalaxyPizzas=Number(localStorage.pizzaGalaxyPizzas)-15000000
		document.getElementById("amountOfPizzas").innerHTML="You have "+localStorage.pizzaGalaxyPizzas+" pizzas"
		localStorage.pizzaGalaxyHoles=Number(localStorage.pizzaGalaxyHoles)+1
		document.getElementById("holeAmounts").innerHTML="You have "+localStorage.pizzaGalaxyHoles+" of these"
		calcPPS()
	}else{
		alert("You cannot afford this")
	}
}
function buyGod(){
	if(Number(localStorage.pizzaGalaxyPizzas)>999999999){
		localStorage.pizzaGalaxyPizzas=Number(localStorage.pizzaGalaxyPizzas)-1000000000
		document.getElementById("amountOfPizzas").innerHTML="You have "+localStorage.pizzaGalaxyPizzas+" pizzas"
		localStorage.pizzaGalaxyGods=Number(localStorage.pizzaGalaxyGods)+1
		document.getElementById("godAmounts").innerHTML="You have "+localStorage.pizzaGalaxyGods+" of these"
		var random = Math.round(Math.random()*2500)
		if(random===1000){
			localStorage.pizzaGalaxyGP = "true"
		}
		calcPPS()
	}else{
		alert("You cannot afford this")
	}
}