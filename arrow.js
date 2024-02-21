// Arrow function

const add = (a,b) => a+b;
const mult = (a,b) => a*b;

const sum = add(7,5);
const multiply = mult(7,5);

// console.log(sum);
// console.log(multiply);


// Get value from object by arrow function
const getAge = (person) => person.age;

const student = {name: 'Saif', age: 27};
const age = getAge(student);

//console.log(age);

// get value from array by arrow function

const getThird = (numbers) => numbers[2];

const number = getThird([1,2,3]);

//console.log(number);


// no parameter 
const getPI = () => Math.PI;
//console.log(getPI());


// large arrow function. if you want to get anything returned from  this function, then you have to use the 'return' keyword

const doMath = (x, y, z) => {

    const sum = x + y + z;
    const multiply = x*z;
    const result =  sum + multiply;

    return result;
}

console.log(doMath(1, 2, 3));