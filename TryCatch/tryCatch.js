// try {
//     console.log("Start of try runs");
//     unicycle;
//     console.log("End of the try runs -- never reached");
// } catch(err){
//     console.log("Error has occured: " + err);
// } finally {
//     console.log("This is always run");
// }

// console.log("...Then the execution continues");
// /*
// Start of try runs
// Error has occured: ReferenceError: unicycle is not defined
// This is always run
// ...Then the execution continues
// */ 

function testFunction(){
    try {
        return 1;
    } catch {
        return 2;
    } finally {
        return 3;
    }
};

console.log(testFunction());
// 3