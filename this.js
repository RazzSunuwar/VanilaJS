// The valule of the keyword 'this' is usually determined by how a function is called.
// It's important to know that this may be different each time the function is called.

// // Global Object
// var myName = 'Ray';
// // console.log(myName);  //Ray
// window.myName;  //On Browser Ray

// console.log(this);

function test(){
    console.log(this);
};
test(); //global object







