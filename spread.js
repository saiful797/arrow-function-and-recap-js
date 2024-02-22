//General
const max = Math.max(1,2,0,5, 13,12,10);
//console.log(max);


// Find a max number from a array
const numbers = [12, 103, 113,24, 35, 76];
//const max2 = Math.max(numbers);//Do not work .

const max2 = Math.max(...numbers);
//console.log(max2);




//use spread operator for copy
const friends = [1, 2, 3, 4, 6];
const boundhu = friends;

boundhu.push(13);

console.log(friends);
console.log(boundhu);


// let a = 12, b = 3;
// [a, b] = [b, a];

// console.log([a,b]);



//advanced
const songkha = [1, 2, 3, ...friends,999];
console.log(songkha);