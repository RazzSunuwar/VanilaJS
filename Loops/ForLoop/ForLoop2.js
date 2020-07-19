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
// var text ="";
// let person = { fname: "Johh", lname: "Doe", age: 25};
// var x;
// for (x in person){
//     text+= person[x] + " ";
// }
// document.getElementById("demo").innerHTML = text;

function Mobile(model_no){
    this.model = model_no;
    this.color = "white";
    this.ram = "8GB";
    this.price = function(){
        document.write(this.model+ "price Rs.3000 <br>");
    };
};

let samsung = new Mobile("Galaxy");
let nokia = new Mobile("Lumia 3310");

for (var specs in nokia){
        if(typeof nokia[specs] !== "function"){
        document.write(specs + " " + nokia[
        specs] + "<br>");
    }
}

