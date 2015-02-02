'use strict';

var Calculator = function(){
	this.add = function(string){
		var numbers = string.split(GetDelimiters(string)).filter(LessThan1000);
		var negatives = numbers.filter(Negative);
		if (negatives.length == 0){
			return numbers.reduce(Sum,0);
		}
		else{
			throw new Error("Negatives not allowed: " + negatives);
		}
	}

	function Sum(x,y){
		return parseInt(x) + parseInt(y);
	}

	function LessThan1000(x){
		return parseInt(x) <= 1000;
	}

	function Negative(x){
		return parseInt(x) < 0;
	}

	function GetDelimiters(string){
		if (string.indexOf("//") == 0){
			if (string.indexOf("[") == 2){
				return new RegExp(string.substring(2,string.indexOf("]\n")).replace("][","|") + "|\n]+", "i");
			}
			else{
				return new RegExp("[" + string.substring(2,string.indexOf("\n")) + "|\n]+", "i");
			}
		}
		else {
			return /[,|\n]+/;
		}
	}
}