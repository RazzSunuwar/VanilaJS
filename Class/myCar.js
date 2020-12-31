// class Car {
//     constructor(brand){
//         this.carname = brand;
//     };
// };

// myCar = new Car("Tesla");
// document.getElementById("demo").innerHTML = myCar.carname;

class Car {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(){
        let date = new Date();
        return date.getFullYear() - this.year;
    };
};

let myCar = new Car("MUSTANG", 2014);
console.log(`My car is ${myCar.age()} years old.`);
// Result: My car is 6 years old.
