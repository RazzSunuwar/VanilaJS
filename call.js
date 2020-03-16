let obj = {num:2};

let addToThis = function(a, b, c){
    return this.num + a + b + c;
};

// console.log(addToThis.call(obj, 3));    // functionname.call(obj, functionarguments)

// let arr = [1,2,3];
// console.log(addToThis.apply(obj, arr));

var bound = addToThis.bind(obj);
console.log(bound(1,2,3));
