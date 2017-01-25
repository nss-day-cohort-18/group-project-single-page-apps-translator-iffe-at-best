// Variable that grabs the textarea element with the ID inputText
var inputText = document.getElementById("inputText").value;
console.log('inputText', inputText);
// Variable to hold output text, default to input text
var finalOutputText = inputText;

// Variable to hold language that the user selects
var selectedLanguage;

// Get a reference to the <select> element that has all the language options
var languageChooser = document.getElementById("languageChooser");

/*
  A <select> element broadcasts a change event, so you listen for it
  and get the value of the language from your augmented IIFE
*/
languageChooser.addEventListener("change", function(event) {
  // Get the value chosen from the DOM
  selectedLanguage = event.target.value;
});

// Translate the text of the language choosen
var translateButton = document.getElementById("translate_button");
translateButton.addEventListener("click", displayTranslation);

function displayTranslation() {
    console.log(inputText);
    var outputDOM = document.getElementById("translated_text");
    if (selectedLanguage === "German"){
        finalOutputText = TranslateText.translateToGerman(inputText.value);
    } else if (selectedLanguage === "Polish"){
        finalOutputText = TranslateText.translateToPolish(inputText.value);
    } else if (selectedLanguage === "Esperanto"){
        finalOutputText = TranslateText.translateToEsperanto(inputText.value);
    } else if (selectedLanguage === "Danish"){
        finalOutputText = TranslateText.translateToDanish(inputText.value);
    
    };
    outputDOM.innerHTML = finalOutputText;
}


