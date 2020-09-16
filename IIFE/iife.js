// (function(){ 
//     var a = 10;
//     document.write(a)
// })();
// document.write(a);  //Value of a will not access because a is called outside of the function.


// (function(a, b){ 
//     var a = 10;
//     console.log(a + " " + b);
// }) (10, 20);

// // 10 20

((a, b) => {
    var a = 10;
    console.log(a  + " " + b);
})(10, 20);

// Result: 10, 20