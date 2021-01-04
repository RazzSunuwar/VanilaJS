let numbers = [1, 2, 3, 4, 5];
numbers.forEach(foreachfunction);

function foreachfunction(currentValue, index, arr){
    console.log('a[' + currentValue + '] = ' + index)
};

/* 
a[1] = 0
a[2] = 1
a[3] = 2
a[4] = 3
a[5] = 4
*/ 