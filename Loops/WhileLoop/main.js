// The while loop keeps repeating an action until an associated condition returns false.
// Syntax:
/*
while (test condition)
{
    body of the loop;
    increment/decrement;
}
*/

 /*
 var i = 0;
 while(true)
 {
     if(i===3)
     break;
     document.write(i);
     i++;
}
*/

// let i = 0;
// while(i<5)
// {
//     document.write(i);
//     i++;
//     document.write("<br>");
// }

// //Result: 
// /*
// 0
// 1
// 2
// 3
// 4
// */

let text = "";
let i = 0;

do {
    text += i;
    i++;
}

while (i < 10);
console.log(text);  //0123456789