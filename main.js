var arr = [7, 7, 12, 98, 106, 89, 200, 1];

var secondGreatLow = function (arr) {
	var x = [];
	var min = Math.min.apply(null, arr);
	var max = Math.max.apply(null, arr);
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] > min && arr[i] < max) {
			x.push(arr[i]);
		}
	}
	var minMax = [];
	minMax.push(Math.min.apply(null, x));
	minMax.push(Math.max.apply(null, x));
	console.log(minMax);
};

var timeConvert = function(num) {
	if (num >= 60) {
		var h = Math.floor(num/60);
		var m = num%60;
		if (m < 10) {
			m = "0"+m;
		}
		console.log(h+":"+m);
	}
	else {
		console.log("0:"+num);
	}
};