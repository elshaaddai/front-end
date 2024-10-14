// Asynchronous JS

// Synchronous -> berjalan single path atau satu proses yang bejalan dalam kode program
// Synchronous -> istilah lain adalah blocking


// contoh code program ini berjalan secara satu per satu dan beurutan
// console.log("Proses 1");//langsung dieksekusi
// console.log("Proses 2");//langsung dieksekusi
// console.log("Proses memakan waktu lama");//langsung dieksekusi
// console.log("Proses 4");//langsung dieksekusi

// Asynchronous -> dibuat dalam multi thread
// multi thread proses yg berjalan secara bersamaan
// Asynchronous -> non-blocking

// 1. Parallel
// berjalan sama - sama

// setTimeout() fungsi yg berjalan dalam asynchronous
// setTimeout(()=>{
//     console.log("Proses 1");
// }, 3000);

// console.log("Proses 2"); //berjalan secara asynchronous

// setTimeout(()=>{
//     console.log("Proses 3");
// }, 5000)

// console.log("Proses 4"); //berjalan secara asynchronous



// 2. Concurrent
// menunggu proses diatas yang selesai baru dijalankan
// setTimeout(()=>{
//     console.log("Proses 1");
//     setTimeout(()=>{
//         console.log("Proses 2");
//         setTimeout(()=>{
//             console.log("Proses 3");
//             setTimeout(()=>{
//                 console.log("Proses 4");
//             },3000)
//         },3000)
//     },3000)
// },3000);



// Promise adalah class jadi harus buat object

let condition = true;
const newPromise = new Promise((resolve, reject) => {
    if(condition){
        resolve("Berhasil");
    }else{
        reject("Gagal");
    }
});

// 2 cara pakai promise
// 1. then - catch
// then adalah method yg jalan kalau resolve. 
// newPromise
// .then((result) => console.log(result))
// .catch((error) => console.log(error));

// .then((result)=>result)
// .then((result2)=> console.log(result2))
// .then((error)=>console.log(error));

// 2. Async - Await
// harus dibuat dalam fungsi
// async() menunggu
// const consumePromise = async () => { 
//     let result = await newPromise; //await adalah menunggu. belum mengeksekusi program 
//     console.log(result);
// }

// untuk solve error
// const consumePromise = async () => { 
//     try{
//         let result = await newPromise; //await adalah menunggu. belum mengeksekusi program 
//         console.log(result);
//     }catch(error){
//         console.log(error);
//     }
// }



// pakai promise yang sudah ada
// 1. Fetch //dipakai buat calling API
// fetch('https://jsonplaceholder.typicode.com/users')
//       .then(response => response.json())
//       .then(json => console.log(json))

// (async()=>{
//     let response = await fetch('https://jsonplaceholder.typicode.com/users')
//     let json = await response.json();
//     json.forEach(({name}) => console.log(name))
// })();


// 2. Axios
axios
.get('https://jsonplaceholder.typicode.com/users')
.then((result)=> console.log(result.data));

(async() => {
    let result = await axios.get('https://jsonplaceholder.typicode.com/users')
    result.data.forEach(({name}) => console.log(name))
})();
