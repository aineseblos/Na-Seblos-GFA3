var num1 = parseInt(Math.random()*20)+1;
document.getElementById("Votes1").innerHTML = num1;

var num2 = parseInt(Math.random()*20)+1;
document.getElementById("Votes2").innerHTML = num2;

var num3 = parseInt(Math.random()*20)+1;
document.getElementById("Votes3").innerHTML = num3;

var maxim = Math.max(num1,num2,num3)
document.getElementById("max").innerHTML = maxim;

var names = "ABCDEFGHIJKLMNOPQRST";
ltr = names.charAt(num1-1);
document.getElementById("band").innerHTML = ltr;

var Total = num1*num2;
var hr = Total/60;
var rhour = Math.floor(hr);
var min = Total%60;
var rmin = Math.round(min);
document.getElementById("time").innerHTML = Total + " minutes or " + rhour + " hour(s) and " + rmin + " minute(s)";

