let students= [
    {name: "James", score: 99, school: "East"},
    {name: "Billy", score: 88, school: "West"},
    {name: "Andy", score: 79, school: "West"},
    {name: "Chan", score: 66, school: "South"},
    {name: "Brad", score: 55, school: "East"},
    {name: "Mosh", score: 94, school: "North"}
];

let processStudents = (data, callback) => {
    for(let i = 0; i < data.length; i++){
        if(data[i].school.toLowerCase() === "east"){
            if(typeof callback === "function"){
                callback(data[i]);               
            };
        };
    };
};

processStudents(students, function(obj){
    if(obj.score > 90){
        console.log(obj.name + " Passed");
    }
})
