// array in javascript
// deklarasi variable
// // cara 1. array literal
// let numbers = [1,2,3,4,5]; //data di dalam array disebut elemen
// console.log(numbers);

// // cara 2. kata kunci new
// let numbers2 = new Array(6,7,8,9,10);
// console.log(numbers2);

// tipe data apa yang bisa disimpan dalam array
// let numbers = [1,2,3,4,5]; //numbers
// let students = ["john","jane","bob"]; //string
// let john = ["john",30,true,[80,90,100]]; //mixed
// console.log(john); 

// // array length
// console.log(numbers.length);
// console.log(students.length);
// console.log(john.length);

// // cara mengakses elemenen/data tertentu dalam array
// // melalui index array. Index selalu dimulai dari 0
// console.log(numbers[2]);//3
// console.log(students[1]);//jane
// console.log(john[2]);//true
// console.log(john[3][1]);//90

// // mengakses elemen/data terakhir dalam array
// let numbers2 = [1,2,3,4,5,6,7,8,9,10];
// console.log(numbers2[9]);
// console.log(numbers2[numbers2.length-1]);
// console.log(numbers2[numbers2.length/2 - 1]);


// let countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp;Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

// let index = countries.findIndex(function(item){
//     return item === "Togo"
// })
// console.log(index);
// console.log(countries[128]);

// array method
let array = [1,2,3,"hello",false,true];
console.log(array);

// 1. toString() //mengconvert array menjadi string
console.log(array.toString());

// 2. join()
console.log(array.join());
console.log(array.join(" "));
console.log(array.join("-"));

// 3. pop()//menghapus index paling terakhir
array.pop();
console.log(array);

// 4. push()
array.push("selamat pagi");
console.log(array);

// 5. shift()
array.shift();//menghapus elemen paling pertama
console.log(array);

// 6. unshift()
array.unshift("selamat pagi");//menambah elemen yang paling depan
console.log(array);

// 7. splice()
array.splice(2,1);//2(menghapus index ke 2),1(hanya 1 saja yang dihapus)
console.log(array);
array.splice(1,1,4);//4(mengganti index ke 1)
console.log(array);
array.splice(2, 0, 2, 3)//menambah 2 dan 3
console.log(array);

// 8. concat()
let buah = ["pisang","apel","jeruk"];
let sayur = ["tomat","bayam","wortel"];
let biji = ["kedelai","kacang tanah","kacang polong"];

let makanan = buah.concat(sayur,biji);
console.log(makanan);

// 9. slice()
let sayuran = makanan.slice(3,6);
console.log(sayuran);
let bijian = makanan.slice(6);
console.log(bijian);

// 10. 




