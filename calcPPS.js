function calcPPS(){
		var pps = localStorage.pizzaGalaxyPPS
		var fires = localStorage.pizzaGalaxyFires  
		var lavas = localStorage.pizzaGalaxyLavas
		var dragons = localStorage.pizzaGalaxyDragons
		var microwaves = localStorage.pizzaGalaxyMicrowaves
		var stoves = localStorage.pizzaGalaxyStoves
		var printers = localStorage.pizzaGalaxyPrinters
		var factories = localStorage.pizzaGalaxyFactories
		var nukes = localStorage.pizzaGalaxyNukes
		var holes = localStorage.pizzaGalaxyHoles
		var gods = localStorage.pizzaGalaxyGods
		
		pps = fires*0.2
		pps = pps + lavas*0.8
		pps = pps + dragons*2.4
		pps = pps + microwaves*5.33
		pps = pps + stoves*100
		pps = pps + printers*600
		pps = pps + factories*5000
		pps = pps + nukes*30000
		pps = pps + holes*13333
		pps = pps + gods*10000000
		pps2 = Math.round(pps*100)/100
		localStorage.pizzaGalaxyPPS = pps
		document.getElementById("pps").innerHTML = "Your Pizzas Per Second is " + String(pps2)
}