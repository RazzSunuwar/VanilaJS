// Note: generator use * before the function name
function *generator(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
};

let iterator = generator();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());