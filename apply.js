// Apply function

let Person = {
    fullName: function() {
        return this.firstName+ " "+ this.lastName;
    }
};

let PersonFirst = {
    firstName: "Ronald",
    lastName: "Gate"
};

let PersonSecond = {
    firstName: "Romeo",
    lastName: "Gate"
};

personFullName = Person.fullName.apply(PersonFirst);
console.log(personFullName);