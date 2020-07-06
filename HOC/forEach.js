let fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);
function myFunction(item, index){
    document.getElementById("demo").innerHTML += index + ":" + item + "<br>";
}

/*
0:apple
1:orange
2:cherry
*/