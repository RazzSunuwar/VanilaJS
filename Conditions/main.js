function myFunction(){
    let greeting;
    let time = new Date().getHours();
    if(time < 10) {
        greeting = "Good Morining";
    } else if (time < 20){
        greeting = "Good Day"
    } else {
        greeting = "Good Evening";
    }
    document.getElementById("demo").innerHTML = greeting;
}