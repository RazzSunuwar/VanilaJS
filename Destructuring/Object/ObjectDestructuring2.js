// Object Returning from a Function
let course = {
    courseName: "JavaScript",
    duration: "One Year",
    location: "USA"
};

function myCourse(z){
    return z;
};

let x = myCourse(course);

let{courseName, duration, location} = x;
console.log(courseName);    //JavaScript
console.log(duration);    //One Year
console.log(location);    //USA