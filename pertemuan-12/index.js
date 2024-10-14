// String Literals, Arrow Function, Default Parameter

// 1. String Literals
let FullName = "John Doe";
let age = 33;
let address = "Manado";

// hello nama saya John Doe, umur saya 33 tahun
// dan saya tinggal di Manado

let kalimat = "Hallo nama saya " + FullName + ", umur saya " + age + " tahun dan saya tinggal di " + address;
console.log(kalimat);

// versi ES6
let kalimat2 = `Hallo nama saya ${FullName}, umur saya ${age} tahun dan saya tinggal di ${address}`;
console.log(kalimat2);

// 2. Arrow Function

// function biasa
// function sayGreetings1(fullName){
//     return `Hello nama saya ${fullName}`;
// }
// console.log(sayGreetings1("John Doe"));

//                       arrow function 
const sayGreetings2 = (fullName) => `Hallo nama saya ${fullName}`
console.log(sayGreetings2("John Doe"));

// Arrow Function pada IIFE
let output1 = (() => `Hello`)();
console.log(output1);

// Arrow Function pada callback
let numbers = [1,2,3,4,5];
let output2 = numbers.map((item) => item);
console.log(output2);

// 3. Default Parameter
const sayGreetings3 = (fullName, age) => {
    if (fullName === undefined){ //if {!fullName}
        fullName = "John Doe";
    }
    if (!age){
        age = 20;
    }
    console.log(`Hello nama saya ${fullName}`);
    console.log(`umur saya ${age} tahun`);
};
sayGreetings3("elsha",21);

const sayGreetings4 = (fullName = "elsha", age = 20, address = "Manado") => {
    console.log(`Hello nama saya ${fullName} umur saya ${age} tahun saya tinggal di ${address}`);
}
sayGreetings4("arwin", 23, "Jakarta")

