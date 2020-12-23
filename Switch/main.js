// let day;
// switch (new Date().getDay()) {
//     case 0:
//         day = "Sunday";
//     break;
//     case 1:
//         day = "Monday";
//     break;
//     case 2:
//         day = "Tuesday";
//     break;
//     case 3:
//         day = "Wednesday";
//     break;
//     case 4:
//         day = "Thursday";
//     break;
//     case 5:
//         day = "Friday";
//     break;
//     case 6:
//         day = "Saturday";
//     break;
// }
// document.getElementById("demo").innerHTML = "Today is " + day;

let day;
switch (new Date().getDay()){
    case 0:
        day = "First Day"
    break;
    case 1:
        day = "Second Day"
    break;
    case 2:
        day = "Third Day"
    break;
    case 3:
        day = "Fourth Day"
    break;
    case 4:
        day = "Fifth Day"
    break;
    case 5:
        day = "Sixth Day"
    break;
    case 6:
        day = "Seventh Day"
    break;
};

document.getElementById("demo").innerHTML = "Today is " + day;
// Result in browser console: Today is Fourth Day