// const user = {
//     username: "zuhayer",
//     price: 344,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this)
//     }

// }

// user.welcomeMessage()
// user.username = "Kashish"
// user.welcomeMessage()

// console.log(this) //refers to the current context which in here is empty



// function chai(){
//     let username = "zuhayer"
//     console.log(this);
// }
// chai()


const chai = () => {
    let username = "zuhayer"
    console.log(this);
}
// chai()

// ARROW FUNCTION....

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit return (another way of writing code using arrow function)

const addTwo = (num1, num2) =>  (num1 + num2)
console.log(addTwo(55, 67))


 





