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
    };
});

let determineTotal = function(){
    total = 0,
    count = 0;

    processStudents(students, function(obj){
        total = total + obj.score;
        count++;
    });
    console.log("Total score: " + total + " and Total Count: " + count);
};

determineTotal();

/*
James Passed
Total score: 154 and Total Count: 2
*/ 
