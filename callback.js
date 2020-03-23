// Callbacks
function myplan(){
    console.log('I want to buy motorbike');
    console.log('I asked money with parents');
    console.log('My parents told me to wait for the money');
    setTimeout(function(){
        console.log('Salary arrived');
        console.log('Now i am going to buy motorbike');
    }, 2000);
}
myplan();