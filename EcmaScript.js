// Function Object Destructuring

const personOne = {
    name: 'Albert',
    age: 26,
    address: {
        location: 'USA',
        state: 'California'
    }
};

const prinUser = ({ name, age }) => {
    console.log(`Name is ${name}. Age is ${age}`);
}
prinUser(personOne);    // Name is Albert. Age is 26.