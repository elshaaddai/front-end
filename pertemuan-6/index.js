// IIFE & CALL BACK FUNCTION
// 1. IIFE (Immediately Invoked Function Expression)
// a. No params, args & return value

// (function (){
//     console.log("hello world");
// })();

// // b. with params, args & return value
// let output = (function (fullName){
//     return "Hello" + fullName;
// })(" John Doe"); //argument(nilai yang dikirim dinamakan argument)
// console.log(output);


// 2. callback function
// a. No params, args & return value
// function sayHello(callback){
//     callback();
// };

// sayHello(function (){
//     console.log("hello world");//callback function
// });

// b. with params, args & return value
// function sayHello(callback){
//     let result = callback("John Doe");
//     return result

// };

// let output = sayHello(function (fullName){
//     return "hello " + fullName;
// });
// console.log(output);

