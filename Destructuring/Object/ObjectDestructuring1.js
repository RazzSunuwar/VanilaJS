// Object Passing to a function
let course = {
    courseName: "JavaScript",
    duration: "One Year",
    location: "USA"
};

const myCourse = ({courseName, duration, location}) => {
    console.log(courseName);    //JavaScript
    console.log(duration);  //One Year
    console.log(location);  //USA
};

myCourse(course);