// singleton 
// ---> while making the object by using the constructor then it is called as singleton
//Object.create(null); // it will create the empty object and this is called as sigleton
// const Juser= new object() --> this is also a singleton object
// object Literals
// ---> while making the object by using the object literals then it is called as object literals not singleton

const mySym = Symbol("key1"); // this is the way to create the symbol

// object
const Juser = {
    name: "sahil",
    "full name": "Sahil Murtuza",  // this is the way to add the space in the key of object
    [mySym]: "value1", // this is the way to add the symbol in the object
    age:22,
    email: "sahil@google.com",
    location: "jaipur",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Friday"]
};

console.log(Juser.name);
console.log(Juser["name"]); // this is the way to access the key of object by using the square bracket

console.log(Juser["full name"]); // we can use this key by the help of dot notation here we have to use the square bracket

console.log(typeof mySym); // this is the way to check the type of symbol
console.log(mySym); // this is the way to print the symbol

console.log(Juser[mySym]); // this is the way to access the symbol key of object

// we can also update the value of object by using the dot notation and square bracket notation
Juser.email = "sahil@chagpt.com";
console.log(Juser.email);

// we can also freeze the object so that we can not update the value of object
Object.freeze(Juser); // this is the way to freeze the object

Juser.email = "sahil@microsoft.com"; // this will not update the value of email because the object is freezed

console.log(Juser);