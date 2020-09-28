// let user = {
//     firstName : "Brad",
//     lastName : "Watt",
//     get fullName (){
//         return (this.firstName + " " + this.lastName)
//     },

//     set fullName(value){
//         [this.firstName, this.lastName] = value.split(" ")
//     }
// };

// // get fullName is executed with the given value
// alert(user.fullName);   //Brad Watt


// // set fullName is executed with the given vaule
// user.fullName = "Mosh Watt";
// alert(user.fullName);   //Mosh Watt

// alert(user.firstName);  // Most
// alert(user.lastName);   // Watt

let user = {
    get name(){
        return this._name;
    },

    set name(value){
        if (value.length < 4){
            alert("Name is too short, need at least 4 characters");
            return;
        }
        this._name = value;
    }
};

user.name = "Chan";
alert(user.name);
user.name = "";



