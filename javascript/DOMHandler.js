// Variable that grabs the textarea element with the ID inputText
var inputText = document.getElementById("inputText").value;

// Variable to hold output text, default to input text
var finalOutputText = inputText;

// Variable to hold language that the user selects
var selectedLanguage;

// Get a reference to the <select> element that has all the meat options
var languageChooser = document.getElementById("languageChooser");

/* 
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the language from your augmented IIFE
*/
languageChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedLanguage = event.target.value;

  // Translate the text of the language choosen
  console.log(TranslateText);
  // Add the topping to the SandwichMaker to increase the total price
});




