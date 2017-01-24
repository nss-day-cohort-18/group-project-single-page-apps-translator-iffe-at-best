"use strict";

// empty iife...

var TranslateText = (function (TranslateText) {

	  var polishTranslate = function () {
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

	      }

	    }

	  };
	  return TranslateText;
})(TranslateText);