// For loop
// let names = ["Andy", "Bryan", "Charles"];

// for(i=0; i< names.length; i++){
//     console.log(names[i]);
// }
/*
Andy
Bryan
Charles
*/


// ForEach
// let names = ["Andy", "Bryan", "Charles"];

// names.forEach((item) => {
//     console.log(item)
// });
/*
Andy
Bryan
Charles
*/



// for...in
/* for...in is used to iterate over the enumerable properties of objects. Every properties in an object
will have an Enumerable value --- if that value is set to true, then the property is Enumerable.*/



const obj = {
    a : 1,
    b : 2,
    c : 3,
    d : 4
}

// for (let elem in obj){
//     console.log(obj[elem])
// }
/*
1
2
3
4
*/ 

// Better yet, we can log out both the key and value pair:
for (let elem in obj){
    console.log(`${elem} = ${obj[elem]}`);
}

/*
a = 1
b = 2
c = 3
d = 4
*/




