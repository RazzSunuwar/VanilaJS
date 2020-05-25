// Nested Object Destructuring
let course = {
    courseName: "JavaScript",
    duration: "Two Months",
    location: "USA",
    student: {
        student1: "Ryan Dahl",
        student2: "Brad Traversy"
    }
}

let{courseName, duration, location, student:{student1, student2}} = course;
console.log(courseName);    //JavaScript
console.log(duration);      //Two Months
console.log(location);      //USA
console.log(student1);      //Ryan Dahl
console.log(student2);      //Brad Travesey