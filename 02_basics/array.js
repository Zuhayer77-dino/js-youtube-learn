const marvel_heros = ["thor", "ironman", "spiderman" ]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);


const allheros = marvel_heros.concat(dc_heros)
console.log(allheros);


const all_new_heros = [...marvel_heros, ...dc_heros] //to concatenate

console.log(all_new_heros);

// flat => to staright out the array 

console.log(Array.from("zuhayer")); //to convert into array

console.log(Array.from({name : "zuhayer"})); //interesting

let score1 = 200
let score2 = 300
let score3 = 400



console.log(Array.of(score1, score2, score3 )); //create a list from the given 





