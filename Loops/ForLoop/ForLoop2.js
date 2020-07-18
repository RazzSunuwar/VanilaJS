// let i ;
// let text = " ";
// for(i=0; i<5; i++){
//     text += i + "<br>"
//     document.getElementById("demo").innerHTML = text;
// }


// let cars = ["Lamborgini", "Ferrari", "Buggati", "Telsa", "Ford"];
// let text = "";
// for( let i=0; i< cars.length; i++){
//     text += cars[i] + "<br>"
//     document.getElementById("demo").innerHTML = text;
// }

// for/in loop
var text ="";
let person = { fname: "Johh", lname: "Doe", age: 25};
var x;
for (x in person){
    text+= person[x] + " ";
}
document.getElementById("demo").innerHTML = text;

