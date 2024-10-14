// JavaScript Function
// cara 1. Function declaration atau fungsi yang berdiri sendiri
function greetings1(){
    console.log("hello world");
}
greetings1();//nama function harus dipanggil

// cara 2. Function Expression
let greetings2 = function(){
    console.log("hello world");
}
greetings2()

// parameter & argument (input), return (output)
// cara 1.
// fullName adalah parameter dan bisa lebih dari 1 parameter
// contoh pemanggilan fungsi yg ada input dan ouput
function greetings3(fullName){
    return "hello world" + fullName;
}
//                       argument
let output1 = greetings3(" John Doe");
console.log(output1);

// cara 2
// penulisan code yang berbeda
let greetings4 = function(fullName){
    return "hello" + fullName;
};
let output2 = greetings4(" John Doe");
console.log(output2);



// function hoisting
// bisa memanggil function terlebih dahulu baru deklarasi
// ERROR
// let output3 = greetings4(" John Doe");
// console.log(output3);

// let greetings5 = function(fullName){
//     return "hello" + fullName;
// };

// global scope & local scope
let x = 10; //global
function foo(){
    let y = 20;//local function
    console.log(x);//10
    console.log(y);//20
    if(y > 10){
        let z = 30; //local block
        console.log(x); //10
        console.log(y); //20
        console.log(z); //30
    }
    // console.log(z);//ERROR
}
// console.log(y);//ERROR KARENA HANYA BISA DIAKSES DI DALAM FUNCTION
console.log(x);//10
foo();