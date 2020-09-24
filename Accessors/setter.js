let person = {
    firstName: "Charles",
    lastName: "Babbage",
    language: " ",
    set lang(lang){
        this.language = lang;
    }
};

// Set property using set
person.lang = "en";

// Display data from object
document.getElementById("demo").innerHTML = person.language;