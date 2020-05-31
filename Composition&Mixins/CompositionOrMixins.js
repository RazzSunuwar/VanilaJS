// // Function for inheritance
// function extend(Child, Parent){
//     Child.prototype = Object.create(
//         Parent.prototype
//     );
//     Child.prototype.constructor = Child;
// }

// // Super Class 
// var Human = function(){

// }

// //Prototype Member
// Mobile.prototype.eat = function(){
//     return "Super Class eat Method";
// }
// Mobile.prototype.walk = function(){
//     return "Super Class walk Method1";
// }
// Mobile.prototype.talk = function(){
//     return "Super Class walk Method2";
// }


// // Sub Class 
// var AI = function(){

// }

// // Sub class AI extending super class Human
// extend(AI, Human);

// //Sub Class Robot
// function Robot = function(){

// }
// // Sub class Robot extending super class Human
// extend(Robot, Human);



// Mixin Function
function mixin (target, ...sources){
    Object.assign(target, ...sources);
    
}

// Composition or Mixin
var eating = {
    eat: function(){
        return "I can eat <br>";
    }
}

var walking = {
    walk: function(){
        return "I can walk <br>";
    }
}

var talking = {
    talk: function(){
        return "I can talk <br>";
    }
}

// var starting = {
//     start: function(){
//         return "RoboCop start <br>";
//     }
// }



// Human Class
var Human = function(){

}

// Robot Class
var Robot = function(){}

// Compositing features to Human
mixin(Human.prototype, eating, walking, talking);

var Mark= new Human();

// Compositing features to Robot
mixin(Robot.prototype, walking, talking);

// var Mark= new Human();
var RoboCop = new Robot();

document.write(Mark.eat());
document.write(Mark.walk());
document.write(Mark.talk());

document.write(RoboCop.walk());
document.write(RoboCop.talk());