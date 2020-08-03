// // JavaScript String Types
// let str = new String("JavaScript String Types");
// console.log(str.length);    //23

// console.log(str.valueOf()); //JavaScript String Types
// console.log(str.toString());    //JavaScript String Types
// console.log(str.toLocaleString());  //JavaScript String Types

// String manipulation

// // 1 concate()
// let firstName = "John";
// let fullName = firstName.concat(" " + "Doe");
// console.log(fullName);

// 2 substr()
// let str = "JavaScript World !";
// console.log(str.substr(0, 10)); // JavaScript

// 3 indexof()
// let str = "This is a string";
// console.log(str.indexOf("string")); //string

// 4 lastIndexOf()
// let str = "Hello Coders! lets rules the world."
// console.log(str.lastIndexOf('r'));  //31

// 5 trim()
// let myTrimStr = " Hello World ";
// let strippedString = myTrimStr.trim();
// console.log(strippedString);    // Hello World 

// 6 localeCompare
// console.log("A".localeCompare("B")); // -1
// console.log("B".localeCompare("B"));    // 0
// console.log("C".localeCompare("B"));    // 1

// // 7 match()
// function  myFunction(){
//     let str = "The rain in NEPAL statys manily in the plain.";
//     let res = str.match(/PAL/gi);
//     console.log(res);   // PAL
// }

// 8 Search()
// let str = "This is a test of search()";
// let pos = str.search(/is/);
// console.log(pos);   //2

// 9 replace()
// let str = "the baby kicks the ball";
// let newStr = str.replace(/the/g, "a");
// console.log(str);   //the baby kicks the ball
// console.log(newStr);    // a baby kicks a ball

// 10 split()
// let str = "JavaScript String Splict()";
// let subStrings = str.split(' ');
// console.log(subStrings);    // [ 'JavaScript', 'String', 'Splict()' ]

// 10 Returning a limited number of substrings examples
// let str = "JavaScript String Splict()";
// let subStrings = str.split(' ', 2); // Seperator and limit inside parenthesis
// console.log(subStrings); //[ 'JavaScript', 'String' ]

// // 10 Split string using a regular expression example
// let str = "Hello World! its me anonymous. Do you know me?";
// let sentences = str.split(/!,.,?/);
// console.log(sentences); //[ 'Hello World! its me anonymous. Do you know me?' ]

// 11 indexOf()
let str = "finding substring in string";
let index = str.indexOf("ing");
console.log(index); // 4













