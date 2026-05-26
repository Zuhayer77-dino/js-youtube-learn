// singleton

const mySym = Symbol("key1")


const JsUser = {
    name : "zuhayer",
    [mySym]: "mykey1",
    age : 45,
    location: "city",
    email: "knsdfdsfs@dsknnfkdsf",
    isLohggedin: false,

}
 
// two ways for object calling

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);


JsUser.greeting = function(){
    console.log("hello js user");
    
}
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name} `);
    
}
console.log(JsUser.greetingTwo());

