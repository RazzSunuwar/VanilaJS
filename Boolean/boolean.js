Boolean.prototype.myColor = function(){
    if(this.valueOf == true){
        return "Green"
    } else {
        return "Yellow"
    };
};

function myFunction(){
    let a = true;
    document.getElementById("demo").innerHTML = a.myColor();
};

// Result: Yellow