var nameArr =['jack','mike','july','stephen','mary','afeng','alice','john','kaka','rick'];
var t;
var val = ['div1','div2','div3','div4','div5','div6',
		   'div7','div8','div9','div10','div11','div12',
		   'div13','div14','div15','div16','div17','div18',
		   'div19','div20','div21','div22','div23','div24'];
var tab = new Array(24);
var j = 0;
function start(){
	var i = Math.floor(10*(Math.random()));
	document.getElementById('sreen').innerText = nameArr[i];
	tab[j] = nameArr[i];
	t = setTimeout("start()",100);
}
function stop(){
	window.clearTimeout(t);
	j = j + 1;
	document.getElementById(val[j-1]).innerText = tab[j-1];
	document.getElementById(val[j-1]).style.color = '#284D90';
}