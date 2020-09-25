let user = {
    firstName : "Brad",
    lastName : "Watt",
    get fullName (){
        return (this.firstName + " " + this.lastName)
    },

    set fullName(value){
        [this.firstName, this.lastName] = value.split(" ")
    }
};

// get fullName is executed with the given value
alert(user.fullName);   //Brad Watt


// set fullName is executed with the given vaule
user.fullName = "Mosh Watt";
alert(user.fullName);   //Mosh Watt

alert(user.firstName);  // Most
alert(user.lastName);   // Watt





