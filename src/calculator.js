var StringKata = function(){
	this.add = function(string){
		var numbers = getNumbers(string).filter(function(x) {return x <= 1000});
		var negatives = numbers.filter(function(x){return x < 0});
		if (negatives.length != 0){
			throw new Error("negatives not allowed " + negatives);
		}
		return numbers.reduce(function(x,y){return x + y},0);
	}
	function getNumbers(string){
		var delimiters = /[,|\n]+/;
		if (string.indexOf("//") == 0){
			delimiters = new RegExp(string.substring(2,string.indexOf("\n")).replace("][","|"));
			string = string.substring(string.indexOf("\n"));
		}
		return string.split(delimiters).map(function(x) {return parseInt(x)});
	}
}