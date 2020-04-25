// const myName = "Robert"

// function printName(){
//     console.log(myName)
// }
// printName(); // Robert



function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable:' + outerVariable)
        console.log('Inner Variable:' + innerVariable)
    };
};

const newFunction = outerFunction('outside');
newFunction('inside');
/* Result:
Outer Variable:outside
Inner Variable:inside
*/