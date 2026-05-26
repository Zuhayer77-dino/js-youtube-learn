// let a = 300
// if(true){
//     let a = 30
//     const b = 20
//     console.log("INNER: ", a);
     
// }

// console.log(a)


// nested scope 
function one(){
    const username = "zuhayer"

    function two(){
        const website = "yotube"
        console.log(username);
        
    }
    // console.log(website);
    
    // two()
}

one()



// interesting fact  

// fact 1 of the way of declaration
console.log(addone(5))

function addone(num){
    return num + 1
}

// fact 2 of the way of declaration 

addTwo(5)
const addTwo = function(num){
    return num + 8
}

// will read this in more depth during the topic of hoisting 
