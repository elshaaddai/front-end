// //JavaScript Object & Conditional

// // deklarasi object
// // Object Literal

// let John = {
//     firstName: "John",//property di dalam object
//     age: 30,
//     isMarried: true, 
//     grade: [80,90,100],
//     sayGreetings: function(){
//         console.log("hello my name is " + this.firstName);
//     },//object method
//     address: {
//         street: "jl. Arnold Mononutu Airmadidi",
//         city: "Minahasi Utara",
//         province: "Sulawei Utama",
//         postalCode: 95371,
//     },
// }
// console.log(John);

// // mengakses property dalam object
// // 1. dot notation
// console.log(John.firstName);
// console.log(John.age);
// John.age = 31; //ubah nilai
// console.log(John);
// John.job = "Teacher"; //tambah properti baru
// console.log(John);

// // 2. bracket notation
// console.log(John["isMarried"]);//true
// John["nationality"] = "indonesia" //tambah properti baru
// console.log(John);

// // object method
// John.sayGreetings();

// // object inside object
// console.log(John.address.city);//cara mengakses lebih spesifik

// // delete property dalam object

// delete John.grade;
// console.log(John);



// JavaScript Conditional
// 1. if - else
// jika suhu hari ini lebih dari atau sama dengan 37,
// tampilkan suhu hari ini pans
// jika tidak, tampilkan suhu hari ini dingin
let temp = 39;
if (temp >= 37){
    console.log("suhu hari ini panas");
}else{
    console.log("suhu hari ini dingin");
};

// if - else - if - else
// jika nilai 100 - 80 tampilkan grade A
// jika nilai 70-79 tampilkan grade B
// jika nilai 50-69 tampilkan grade C
// jika nilai dibawah 50 tampilkan grade D
let nilai = 100;
if (nilai >= 80 && nilai <= 100) {
    console.log("Grade A");
} else if (nilai >= 70 && nilai <= 80){
    console.log("Grade B");
} else if (nilai >= 50 && nilai <= 70){
    console.log("Grade C");
} else{
    console.log("Grade D");
}

// 3. switch - case
// jika angka 1 tampilkan januari
// jika angka 2 tampilkan february
// jika angka 3 tampilakan maret
// :
// jika angka 12 tampilkan desember

let number = 2;
switch(number){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("maret");
        break;
    default:
        console.log("not found");
        break;
}