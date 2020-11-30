// Function Object Destructuring

// const personOne = {
//     name: 'Albert',
//     age: 26,
//     address: {
//         location: 'USA',
//         state: 'California'
//     }
// };

// const prinUser = ({ name, age }) => {
//     console.log(`Name is ${name}. Age is ${age}`);
// }
// prinUser(personOne);    // Name is Albert. Age is 26.


const PersonDetails = {
    name: "Brad",
    age: 23,
    address: {
        location: "street-45 New York",
        country: "USA" 
    }
};

const PrintDetails = ({ name, address}) => {
    console.log(`Name is ${name}. Address is ${address.location}`)
};

PrintDetails(PersonDetails);

// Result: Name is Brad. Address is street-45 New York