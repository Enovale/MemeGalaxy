function cheat(){
	localStorage.pizzaGalaxyPizzas=document.getElementById("cheat").value;
	document.getElementById("amountOfPizzas").innerHTML="You have "+localStorage.pizzaGalaxyPizzas+" pizzas"
}