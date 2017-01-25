"use strict";

// empty iife...

var TranslateText = (function (translateText){

	var germanText = {
	  	"merry": "froliche", 
	  	"christmas": "Weihnachten", 
	  	"and": "und", 
	  	"happy": "frohes", 
	  	"new": "neu", 
	  	"year": "Jahr"
	};

  	translateText.translateToGerman = function(englishWord) {
    	return germanText[englishWord];
    };	
	   
	return translateText;

})(TranslateText);