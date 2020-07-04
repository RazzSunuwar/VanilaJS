let text = "";
let i;
for (i =0; i< 10; i++) {
    if(i === 3) {break; }
    text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;

/*
The number is 0
The number is 1
The number is 2
*/