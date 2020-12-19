// let myArray = ["Good", "Better", "Best"];


// let newArray = myArray.splice(1,1);
// console.log(newArray);

// // Result: ["Better"]

let myArray1 = ["Apple", "Berry", "Coconut", "Orange"];
myArray1.forEach(function(index, item){
    document.getElementById("demo").innerHTML += index + ":"+ item + "<br>"
});

