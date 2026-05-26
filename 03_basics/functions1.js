// function sayMyName(){
//     console.log("z");
//     console.log("u");
//     console.log("a");
//     console.log("h");
//     console.log("y");
//     console.log("r");

// }

// // sayMyName => reference
// // sayMyName() => execution

// sayMyName()


function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
}

const result = addTwoNumbers(3, 5)
console.log("Result :", result)

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username")
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Zuhayer")) => will say zuhayer 
console.log(loginUserMessage()) // => the output will say undefined





