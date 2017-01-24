"use strict"

// empty iife...

var TranslateText = (function () {

	  var privateMethod = function () {};
	  
	  return {
	    publicMethodOne: function () {
	      // I can call `privateMethod()` you know...
	    },
	    publicMethodTwo: function () {

	    },
	    publicMethodThree: function () {

	    }
	  };

})();