// For Loops
// console.log("JAVASCRIPT FOR LOOP");
let cars = ["Buggati", "Ferrari", "Lamborgini", "Tesla", "McLaren"];
let text = "";
let i;
for(i= 0; i< cars.length; i++) {
    text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;
