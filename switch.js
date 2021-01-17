// syntax:
// switch(expression){
//     case value_1;
//     expression_1;
//     break;

//     case value_2;
//     expression_2;
//     break;

//     case value_3;
//     expression_3;
//     break;
// }


let day;
switch(new Date().getDay()){
    case 0:
    day = "Sunday";
    break;
    case 1:
        day = "Monday";
        break;
        case 2:
            day = "Tuesday";
            break;
            case 3:
                day = "Wednesday";
                break;
                case 4:
                    day = "Thrusday";
                    break;
                    case 5:
                        day = "Friday";
                        break;
                        case 6:
                            day = "Saturday";
                            break;

};

console.log("Today is ", day);

// Result:
// Today is  Sunday