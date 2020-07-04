let text = "";
let i;
for (i = 0; i < 10; i++){
if (i===3) { continue; }
text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;

/*
Result: 
The number is 0
The number is 1
The number is 2
The number is 4
The number is 5
The number is 6
The number is 7
The number is 8
The number is 9
*/