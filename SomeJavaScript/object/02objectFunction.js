// Here we are defining an object with a method
const Juser = {
    name: "Sahil",
    age: 22,
    email: "sahil@google.com",
}
Juser.greeting = function() {
    return "hello there, i am " + this.name;
}
console.log(Juser.greeting);  //  printing its reference (the function object itself)
console.log(Juser.greeting());