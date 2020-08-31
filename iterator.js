// Iterable
let myNumber = new Set([1,2,3,3,4,5]);
for(let keys of myNumber){
    console.log(keys);
}

/*
1
2
3
4
5
*/ 

// Iterator
let myArray = [1,2,3,4,5,6,7];
let iterator = myArray[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
