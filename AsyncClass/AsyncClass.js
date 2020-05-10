// Async class methods
// To declare an async class method, just prepend it with async:
class Waiter {
    async wait() {
        return await Promise.resolve(1);
    }
}
new Waiter()
    .wait()
    .then(alert); //1
// The meaning is the same: it ensures that the returned value is a promise and enable await.