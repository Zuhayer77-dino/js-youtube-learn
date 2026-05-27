const promiseOne = new Promise(function (resolve, reject){
    // do async taks
    // db calls, cryptography,  netweok calls
    setTimeout(function(){
        console.log('Async taks is complete');


    },1000)
})
promiseOne.then(function(){
    console.log("promise consuem");

})

method 2 of writng the above 
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve()
    }, 2500)
}).then(function(){
    console.log("Async 2 is resolved")
})
// then and resolve in the function are connect by the resolve inside the method of the funciton


// promise 3
const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "chai", email:"chai@gmail.com"})  
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})


// promise 4
const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        // let error = true 
        let error = false
        if (!error) {
            resolve({ username: "Zuhayer", password: "Labeeb@123" })
        } else {
            reject('ERROR : something went wrong')
        }
    }, 1000)
})

// promiseFour
    .then((user) => {
        console.log(user);
        return user.username
        /* we use another then which is called chaining..what result we got from previous then
         will be used in the new then */
    })
    .then((username) => {
        console.log(username);
    })
    .catch(function (error) {
        console.log(error);
    })
    .finally(() => console.log("The Promise is either resolved or rejected!"))


// promise 5
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true
        // let error = false
        if (!error) {
            resolve({ username: "javascript", password: "123" })
        } else {
            reject('ERROR : JS went wrong')
        }
    }, 1000)
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
consumePromiseFive()


// using fetch

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json() 
    })
    .then((data) => {
        console.log(data);
})
.catch ((error) => console.log(error))