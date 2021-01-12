// Practice 1
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

//Practice 2
// function testFunction(){
//     try {
//         return 1;
//     } catch {
//         return 2;
//     } finally {
//         return 3;
//     }
// };

// console.log(testFunction());
// // 3

//Practice 3
let connection = {
    open : function(){
        console.log("open a connection");
    },
    close: function (){
        console.log("close a connection");
    }
};

try {
    connection.open();
} catch (error) {
    console.log("error.message");
} finally {
    connection.close();
}

// Result: 
/*
open a connection 
close a connection
*/