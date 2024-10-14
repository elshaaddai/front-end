// let people = ["Greg", "Mary", "Devon", "James"];
// console.log(people);
// // for loop
// for (let i=0; i<people.length; i++){
//     console.log(people[i]);
// };

// // forEach()
// people.forEach(function(item){
//     console.log(item);
// });

// // remove greg
// people.shift()
// console.log(people);

// // remove james
// people.pop();
// console.log(people);

// // add Matt
// people.unshift("Matt");
// console.log(people);

// // add your name
// people.push("Elsha");
// console.log(people);

// // for-loop
// for (let i=0; i<people.length; i++){
//     console.log(people[i]);
//     if (people[i]==="Marry"){
//         break;
//     };
// };

// // copy without marry and matt using slice
// let newPeople = people.filter(
//     (person) => person !== "Mary" && person !== "Matt"
// );
// console.log(newPeople);

// // add elizabeth and artie
// people.splice(2,1,"Elizabeth", "Artie");
// console.log(people);

// // create new var
// let withBob = people.concat("Bob");
// console.log(withBob);



let programming = {
    languages: ["JavaScript", "Pyhton", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};

// add language Go
programming.languages.push("Go");
console.log(programming);

// bracket notation
programming["difficulty"] = 7;
console.log(programming);

// remove jokes key
delete programming.jokes;
console.log(programming);

// dot notation
programming.isFun = true;
console.log(programming);

// 
programming.languages.map(function(language, index){
    console.log(`${index}- ${language}`);
})
