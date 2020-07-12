class Car {
    constructor(brand){
        this.carname = brand;
    }
}

myCar = new Car("Tesla");
document.getElementById("demo").innerHTML = myCar.carname;