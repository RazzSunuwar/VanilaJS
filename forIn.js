// Practice 1
// let person = {
//     firstName : "Victory",
//     lastName : "Page",
//     phone: 1245589
// };

// function myFunction(){
//     let text = "";
//     let x;
//     for(x in person){
//         text += person[x] + " ";
//     }
//     console.log(text)
// };

// myFunction();
// // Result: Victory Page 1245589

// Practice 2
const myFunction = () => {
    let person = {
        fname: "Brad",
        lname: "Watt",
        age: 25
    };

    let text = " ";
    let x;
    for(x in person){
        text += person[x]+ " ";
    };
    console.log(text);
};

myFunction();

// Result: Brad Watt 25 