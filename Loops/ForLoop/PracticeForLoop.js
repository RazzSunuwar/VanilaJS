// Practice for loop
const days = ["Sun", "Mon", "Tue", "Wed", "Thr", "Fri", "Sat"];
// for(let i = 0; i < days.length; i++){
//     const element = days[i];
//     console.log(element);
// }
// /*
// Result:-
// Sun
// Mon
// Tue
// Wed
// Thr
// Fri
// Sat
// */ 

for (let i = days.length-1; i >= 0; i--) {
    console.log(days[i])
}
/*
Sat
Fri
Thr
Wed
Tue
Mon
Sun
*/ 