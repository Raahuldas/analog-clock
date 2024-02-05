var h = document.getElementById("hr");
var m = document.getElementById("min");
var s = document.getElementById("sec");

setInterval(clc,1000);

	function clc() 
	{
	var d = new Date();
	var hour = d.getHours();
	var minute = d.getMinutes();
	var second = d.getSeconds();
	var hr_rotation = 30 * hour + minute/2;
	var min_rotation = 6*minute;
	var sec_rotation = 6*second;

	h.style.transform = "rotate(" + hr_rotation + "deg)";
	m.style.transform = "rotate(" + min_rotation + "deg)";
	s.style.transform = "rotate(" + sec_rotation + "deg)";
	}

