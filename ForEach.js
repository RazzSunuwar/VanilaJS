let numbers = [11, 22, 33, 44, 55];

numbers.forEach(myFunction);


function myFunction(item, index, arr){
    arr[index] = item * 2;
}

console.log(numbers);   //[ 22, 44, 66, 88, 110 ]
