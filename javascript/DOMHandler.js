<<<<<<< Updated upstream
// Variable to hold the final price. Default to 0.
var finalSandwichPrice = 0;

// Variable to hold topping that the user selects
var selectedTopping;

// Get a reference to the <select> element that has all the meat options
var meatChooser = document.getElementById("meat-chooser");

/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the topping from your augmented IIFE
*/
meatChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedTopping = event.target.value;
=======
var inputText = document.getElementById("inputText");
//no .value here because that only temp stores userinput
var finalOutputText = document.getElementById("translated_text");

var selectedLanguage;

var translateButton = document.getElementById("translate_button");

var languageChooser = document.getElementById("languageChooser");


languageChooser.addEventListener("change", function(event) {
	selectedLanguage = event.target.value
	//de we want "change" to trigger translatetext.translatetoXLanguage?
});

translateButton.addEventListener("click", function(event) {
	if (selectedLanguage === "germanTranslate"){
		finalOutputText.innerHTML = TranslateText.translateToGerman(inputText.value);
	} else if (selectedLanguage === "polishTranslate"){
		finalOutputText.innerHTML = TranslateText.translateToPolish(inputText.value);
	} else if (selectedLanguage === "esperantoTranslate"){
		finalOutputText.innerHTML = TranslateText.translateToEsperanto(inputText.value);
	} else if (selectedLanguage === "danishTranslate"){
		finalOutputText.innerHTML = TranslateText.translateToDanish(inputText.value);
	}
});

  



>>>>>>> Stashed changes

  // Determine the price of the topping chosen

  // Add the topping to the SandwichMaker to increase the total price
});
