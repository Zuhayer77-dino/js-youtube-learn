const user = {
    username: "zuhayer",
    price: 345
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

// directly we can pass objects
handleObject({
    username : "harry",
    price: 455
})


// we can pass array too
const myNewArray = [200, 400, 100, 550]

function returnSecondValue(getArray){
    return getArray[2]
}

console.log(returnSecondValue(myNewArray));




