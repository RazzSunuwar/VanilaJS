Boolean.prototype.myColor = function(){
    if(this.valueOf == true){
        return "Green"
    } else {
        return "Yellow"
    };
};

const myFunction = () => {
    let a = true;
    document.getElementById("demo").innerHTML = a.myColor();
};

// Result: Yellow