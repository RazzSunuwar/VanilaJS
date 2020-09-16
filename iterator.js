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
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

/*
1
2
3
4
5
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: 4, done: false }
{ value: 5, done: false }
{ value: 6, done: false }
{ value: 7, done: false }
{ value: undefined, done: true }
*/ 
