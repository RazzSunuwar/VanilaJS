// method => obj
// function => global (window, global)

// const video = {
//     title : "a",
//     play(){
//         console.log(this);
//     }
// };

// video.play();

// { title: 'a', play: [Function: play] }


// Explicit Function Binding

// Call() & Apply() methods used to call an object methods with another object as argument.

let person1 = {
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
};

var person2 = {
    firstName: "Jim",
    lastName: "Doe"
};

let personDetail = person1.fullName.call(person2);
console.log(personDetail);

// Result: Jim Doe

