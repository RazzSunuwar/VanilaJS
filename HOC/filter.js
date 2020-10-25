let ages = [32, 33, 16, 40];

const checkAdult = (age) => {
    return age >= 18;
};

const myFunction = () => {
    document.getElementById("demo").innerHTML = ages.filter(checkAdult);
};