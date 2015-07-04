$(document).ready(function(){

// Declare global variables 
var flavorsContainer = $("#flavors-container");
var flavorTitle = $("#flavor-title");
var ingredients = $("#flavor-description");
var image = $("#flavor-image");
var nutrition = $("#flavors-lightbox");
var chosen = "";

// Declare Flavor object and define flavor variables
function flavor (title, ingredients, image, nutrition) {
	this.flavorTitle = title;
	this.ingredients = ingredients;
	this.image = image;
	this.nutrition = nutrition;

}

var berry = new flavor("Berry", ["Raspberries", "Blackberries", "Blueberries"], "img/berry.jpg", "img/nutrition-berry.png");
var citrus = new flavor("Citrus", ["Lemon", "Lime", "Grapefruit"], "img/citrus.jpg", "img/nutrition-citrus.png");
var cucumbermelon = new flavor("Cucumber Melon", ["Cucumber", "Canteloupe", "Honeydew"], "img/cucumber-melon.jpg", "img/nutrition-cucumbermelon.png");
var strawberrykiwi = new flavor("Strawberry Kiwi", ["Strawberries", "Kiwi"], "img/strawberry-kiwi.jpg", "img/nutrition-strawberrykiwi.png");
var cherrypomegranate = new flavor("Cherry Pomegranate", ["Cherries", "Pomegranate"], "img/cherry-pomegranate.jpg", "img/nutrition-cherrypomegranate.png");

//Add click listeners to flavor buttons
$("#flavors-column img").click(function(e){
	nutrition.show();
	console.log("working");
	removeActives();
	$(this).addClass("activeFlavor");
	processFlavor(e);
});

function removeActives(){
	$("#flavors-column img").removeClass("activeFlavor");
}

function processFlavor(e){
	chosen = e.target.id;
	switch (chosen){
		case "berry":
			getInfo(berry);
			break;
		case "citrus":
			getInfo(citrus);
			break;
		case "cucumbermelon":
			getInfo(cucumbermelon);
			break;
		case "strawberrykiwi":
			getInfo(strawberrykiwi);
			break;
		case "cherrypomegranate":
			getInfo(cherrypomegranate);
			break;
	}
}

function getInfo(chosen){
	flavorTitle.html(chosen.flavorTitle);
	ingredients.html(chosen.ingredients.join(", "));
	image.attr("src", chosen.image);
	nutrition.attr("href", chosen.nutrition);
}
	


});