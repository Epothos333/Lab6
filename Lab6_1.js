var convertTemp = function(Temp, str) {
	if (str === "C" || str ==="c") {
		var ans = (Temp-32) *5/9;
	}
	else if(str === "F" || str === "f") {
		var ans = (Temp*9/5)+32;
	}
	return ans
}

console.log(convertTemp(212, "C"));
console.log(convertTemp(32, "C"));
console.log(convertTemp(65, "C"));
console.log(convertTemp(-40, "F"));