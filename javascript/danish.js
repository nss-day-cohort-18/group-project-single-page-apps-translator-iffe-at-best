"use strict";

var TranslateText = (function (TranslateText){
	var danishTranslate = {
	    "merry": "lystig",
		"christmas": "jul",
		"and": "og",
		"happy": "lykkelig",
		"new": "ny",
		"year": "år"
	};

	return {
		getDanishTranslation: function(danishWord){
			return danishTranslate[danishWord]
		}
	  
	};
	  return TranslateText;
})(TranslateText);
console.log(TranslateText);









   