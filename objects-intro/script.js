// objects - unordered collections of key value pairs

let emptyObj = {};

const dog = {
    name: 'Rufus',
    age: 4,
    email: 'rufus@gmail.com',
    // input: 'here'
    hobbies: ['chess', 'reading'],
    address: {
        street: ['Lobeckstr.', 23],
        zip: 12345
    }
}

// deleting a property
// delete dog.email

// checking if a property exists -> prop in object
// console.log('email' in dog);

// console.log(dog);

// console.log(dog.address.street[0]);

// console.log(dog.name);
// dog.age = 'desk';
// dog.favouriteFood = 'sausage';
// console.log(dog);
const input = 'name'
// console.log(dog[input]);
// console.log(dog.hobbies[1]);

// iterating over an object

const user = {
    name: 'john',
    password: '12345'
}

for (let prop in user) {
    // console.log('key', prop);
    // console.log('value', user[prop]);
}

// returns an array containing all the keys
// console.log(Object.keys(user))
Object.keys(user).forEach(function (key) {
    // console.log(user[key])
});

// returns an array containing all the values
// console.log(Object.values(user));

const persons = [
    {
        name: 'mary',
        age: 23
    },
    {
        name: 'bob',
        age: 25
    },
    {
        name: 'alice',
        age: 32
    }
];
for (let person of persons) {
    console.log(person.name);
}