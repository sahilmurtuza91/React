/*
Destructuring means unpacking values from arrays or objects into separate variables — in a clean and quick way.

It’s like taking data out of a box 📦 and directly assigning it to variables.
*/

const Juser = {
    id : 1,
    name : "Sahil",
    age : 21,
    email : "sahil@google.com",
}

// this is the normal method to acces the element of the Object
console.log(Juser.name);

// this is the Destructuring way (modern)

const { name } = Juser;
console.log(name);

// here we can also use some variable instaed of the directly name to access the value

const { name:username, age: userage} = Juser;
console.log(username);
console.log(userage);

/*
-------------------Destructuring for the react ----------------------------
In React, we often receive props (data passed to a component).
Instead of writing props.company, we destructure them directly in the function parameter.
*/

const navbar = ({company}) =>{
    // return(
    //     // <h1>This is the {company}</h1>
    // );
}
navbar(company = "Sahilmurtuza")

// JSON ---> JSON is same as like the object but only difference is that in JSON there is no name like the object and also key is kept in the "".

// Example 
/*
{
    "id" : 1,
    "name" : "Sahil",
    "age" : 21,
    "email" : "sahil@google.com",
}
*/

// Sometimes JSON are also implemented as array

[
    {},
    {},
    {}
]