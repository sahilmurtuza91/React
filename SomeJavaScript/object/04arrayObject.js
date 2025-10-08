// A single array that contains multiple objects as its elements.
// Arrays of objects are mostly used when you receive or manage data from a backend or database.
const Juser = [
    {
        id : 1,
        name : "Sahil",
        age : 21,
        email : "sahil@google.com",
    },
    {
        id : 2,
        name : "Abdullah",
        age : 22,
        email : "Abdullah@google.com",
    },
    {
        id : 3,
        name : "Jaibullah",
        age : 23,
        email : "jaibullah@google.com"
    },
    {
        id : 4,
        name : "kaif",
        age : 25,
        email : "kaif@google.com"
    },
    {
        id : 5,
        name : "Mohit",
        age : 27,
        email : "Mohit@google.com"
    },
    {
        id : 6,
        name : "faizan",
        age : 30,
        email : "faizan@google.com"
    }
];

// console.log(Juser[1].name);
// console.log(Object.keys(Juser[1]));
for (const key in Juser) {
    Juser[key].location="jaipur";
}

// for ( const key in Juser) {
//     console.log(Juser[key]);
// }

Juser.push({
    id : 7, name : "Saif", age : 29, email : "saif@google.com"});

for ( const user in Juser) {
    console.log(Juser[user]);
}