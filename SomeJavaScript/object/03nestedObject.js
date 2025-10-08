// const student = new Object();  ---> this is the skelaton

// this is literals object
const Student={
    name: "Sahil",
    marks: {
        Math: 95,
        Science: 92,
    },
}

console.log(Student.marks?.Math); // this question mark (?) helps us to prevent from the if else--> if the marks have some vlaue then it will give us its value otherwise  it not gives 
// console.log(Student.marks);
// console.log(Student);
// console.log(typeof Student);
// console.log(typeof Student.marks);
// console.log(typeof Student.marks.Science);


// Merge two or more array
const obj1 = { 1:"a", 2:"b"};
const obj2 = { 3:"c", 4:"d"};
const obj3 = { 5:"e", 6:"f"};



const objMerge=Object.assign({}, obj1,obj2,obj3);  // --> here {} represent as the target where we have to merge all the object and the remaining object represent as the source
// console.log(objMerge);

// we also also perform the merging of array withoud using the empty object wich is target but using targete {} is the best practice
// const objMerge = Object.assign(obj1,obj2,obj3);

// this is also an another approch that is used to merge the object

const mergObj={...obj1, ...obj2, ...obj3};
// console.log(mergObj);

console.log(Object.keys(Student)); // it give's the all key of the object in the form of array
console.log(Object.values(Student)); // it give's the all value of the object in the form of array
console.log(Object.entries(Student)); // this will gives the each key and value in the form of array