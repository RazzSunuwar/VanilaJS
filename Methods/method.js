let person = {
    firstName: "Brad",
    lastName: "Watt",
    id: 123,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());
// Brad Watt