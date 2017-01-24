//"use strict";
// empty iife...
// Variable that grabs the textarea element with the ID inputText
var inputText = document.getElementById("inputText").value;


var TranslateText = (function (TranslateText) {

	  var polishTranslate = {
	  	// translate goes here
	  	"merry":"god", 
	  	"christmas":"jul",
	  	"and":"och", 
	  	"happy":"gott", 
	  	"new":"nytt",
	  	"year":"år"
	  };
	  
	 return {
	    translateToPolish: function () {
	      // I can call `privateMethod()` you know...
	     for (word in polishTranslate) {
	     	inputText = polishTranslate;
	     	console.log(inputText);
	      };
	      console.log("hi");

	    }

	  };
	  return TranslateText;
})(TranslateText);