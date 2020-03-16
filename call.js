let obj = {num:2};

let addToThis = function(a){
    return this.num + a;
};

console.log(addToThis.call(obj, 3));    // functionname.call(obj, functionarguments)
