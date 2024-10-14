// ubah/modifikasi exercise 1 
// menggunakan 
// 1. IIFE
// 2. ubah menggunakan callback


(function (berat,tinggi, callback){
    let bmi = berat / (tinggi * tinggi);
    callback(bmi)
})(70, 1.75, function(bmi){
    console.log("BMI ideal anda : " + bmi.toFixed(2));
});


function calculateBMI(berat,tinggi,callback){
    let bmi = berat / (tinggi * tinggi);
    callback(bmi); 
}



function calculateBMI(berat,tinggi,callback){
    let bmi = berat / (tinggi * tinggi);
    callback(bmi);
}

let berat = 50;
let tinggi = 1.56;
calculateBMI(berat,tinggi, function(bmi){
    console.log("BMI ideal anda : " + bmi.toFixed(2));
})




