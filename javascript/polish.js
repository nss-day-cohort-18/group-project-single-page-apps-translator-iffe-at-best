"use strict";

// empty iife...

var TranslateText = (function (TranslateText) {

    var polishTranslate = {
	  	"merry":"wesołych", 
	  	"christmas":"świąt",
	  	"and":"i", 
	  	"happy":"szczęśliwego", 
	  	"new":"nowego",
	  	"year":"roku"
    };

 	return {
      getPolishTranslation: function(polishWord) {
        return polishTranslate[polishWord]
      }
    };
    return TranslateText;
})(TranslateText);
console.log(TranslateText);