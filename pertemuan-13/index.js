// Rest Parameter & Spread Oprator
// 1. Rest Parameter
// dipakai untuk membuat fungsi yang memiliki banyak parameter

// tanpa rest Parameter
const func1=(param1, param2, param3, param4, param5) => {
    console.log(param1, param2, param3, param4, param5);
};
func1("A","B","C","D","E");

// dengan rest parameter
const func2 = (...params) => {
    console.log(params);
}
func2("a","b","c","d","e")

// Rest Prameter harus berada di terakhir dalam parameter list
const func3 = (param1, param2, ...params) => {
    console.log(param1, param2);
    console.log(params);
    console.log(params[1]);
}
func3("a","b","c","d","e");

// Mini Exercise
const penjumlahan = (a,b,c,d,e) => {
    let arr = [a,b,c,d,e];
    let hasil = 0;
    arr.forEach((item) => (hasil += item));
    return hasil;
}
console.log(penjumlahan(1,2,3,4,5));


// rest parameter
const penjumlahan1 = (...arr) => {
    let hasil = 0;
    arr.forEach((item) => (hasil += item));
    return hasil;
}
console.log(penjumlahan1(1,2,3,4,5,6,7,8,9,10));

// 2. Spread Operator
// fungsi spread, lebih sering dipakai dalam array dan object
let numbers = [1,2,3,4,5];
console.log(...numbers);

// array
// 1. duplicate array
let number2 = [...numbers];
numbers.push(6)
console.log(number2);

// 2. menggabungkan array
let array1 = [1,2,3];
let array2 = [4,5,6];
let array3 = [7,8,9];

let numbers3 = array1.concat(array2,array3); //ES5
let numbers4 = [...array1,...array2,...array3]; //ES6

// Object
// 1. duplikasi object
const john = {
    fullNme: "John Doe",
    age: 30,
};
const john2 = {...john, address: "Manado"};

// 2. menggabungkan object
let obj1 = {a: 1, b: 2};
let obj2 = {c: 3, d: 4};

let combinatedObj = {...obj1, ...obj2};