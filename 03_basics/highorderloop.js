// before starting loops a small topic is there called IIFE
// real world use :
// (function (){
//     let privatedata = "secret";

// const { useCallback } = require("react")

//     function show(){
//         console.log(privatedata);
        
//     }
//     show()
// })();

// // using arrow function
// (() => {
//     console.log("Arrow IIFE");
    
// })();

// // for interview pov 
// (function(){
//     console.log("First");
//     })();

// (function () {
//     console.log("second");
    

// })();
    


// for of loop 
// const arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num);
// }

// const greetings = "Hello world"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
    
// }


// // maps

// const map = new Map()
// map.set('IN', "inDIA")
// map.set('USA', "United States of America")
// map.set('Fr', "France")

// console.log(map);

// // using for of loop
// for (const [key, value] of map){
//     console.log(key, ':-', value);
// }

// // const myObject = {
// //     'game1': 'NFS',
// //     'game2': "spiderman"
// // }

// // for (const [key, value] of myObject){
// //     console.log(key, ':-', value)
// // }

// const myObject = {
//     JS : 'JAVAscript',
//     cpp : 'C++',
//     rb : 'RUBY',
//     swift : "swift by apple"
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`);    
    
// }

// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming) {
//    console.log(programming[key]);
// }

// **********foreach loop*********

const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach(function(item) {
//     console.log(item);
// })

// coding.forEach( greet = (item) => {
//     console.log(item);
// })

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach ((item) => {

    console.log(item.languageName);
})


