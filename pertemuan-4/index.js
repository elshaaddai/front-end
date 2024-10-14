// // variable & operators

// // var tidak mengenal blockscope

// //1. JavaScript Variable
// let fullName = "John Doe"; //camel case
// let full_name = "John Doe"; //snake case
// let FullName = "John Doe"; //pascal case

// const gender = "famale"; //string
// // gender = "male"; //error
// let age = 30; // integer
// age = 31;
// let weight = 85.5; //float
// let isMarried = false; //boolean
// let grade = null; //null
// let address; //undefined

// console.log(typeof fullName)
// console.log(gender);
// console.log(typeof age);
// console.log(typeof weight);
// console.log(typeof isMarried);
// console.log(grade);
// console.log(typeof address);

//2. JavaScript Operators
// arithmetic operator (+,-,*,/,%,**)
// let bill1 = 20;
// let bill2 = 5;

// console.log(bill1 + bill2); //25
// console.log(bill1 - bill2); //15
// console.log(bill1 * bill2); //100
// console.log(bill1 / bill2); //4
// console.log(bill1 % bill2); //0
// console.log(bill1 ** bill2); //3200000

// let alas = 5;
// let tinggi = 5;
// let luas = 0.5 * alas * tinggi;
// console.log(luas); //12.5



// b. Assignment Operator (=, +=, -=, *=, /=)
// let bilangan = 10;
// // bilangan = bilangan + 10;
// bilangan += 10;
// console.log(bilangan);

// c. string operators(+)
// let firstName = "John";
// let lastName = " Doe";

// let fullName = firstName + lastName;
// console.log(fullName);



// d. relational operators (==, ===, < , > , >=, <=)
// let bill1 = 10;
// let bill2 = 10;
// let bill3 = "10";
// let bill4 = 5;

// console.log(bill1 == bill2); //true
// console.log(bill1 === bill2); //true
// console.log(bill1 == bill3); //tidak cek tipe data(loose equality)
// console.log(bill1 === bill3); //jika memakai 3= tipe data di cek (strict equality)

// console.log(bill1 > bill4);
// console.log(bill1 < bill4);


// e. ternary operator (? :) digunakan untuk memberikan nilai pada variabel sesuai dengan kondisi yang ditentukan
// let age = "17";
// let isEligible = age >= 17 ? "bisa buat ktp" : "belum bisa buat ktp";

// console.log(isEligible);


// f. logical operator (&, ||, !)
// AND (&&)
// console.log(true && true);

// // OR (||)
// console.log(true || false);

// // NOT 
// console.log(!true);
// console.log(!false);