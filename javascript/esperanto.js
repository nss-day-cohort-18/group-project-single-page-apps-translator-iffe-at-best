"use strict";

var TranslateText = (function (TranslateText) {
  var esperantoTranslate = {
    "merry": "gaja",
    "christmas": "christmas",
    "and": "kaj",
    "happy": "feliĉa",
    "new": "novaj",
    "year": "jaro"
  };
  TranslateText.translateToEsperanto = function(word) {

    return esperantoTranslate[word];
  };
  return TranslateText;
})(TranslateText);

console.log(TranslateText);