// Var, Let, Const

// Global scope and Block scope 
// GS: Variable accessable in whole file
// BS: Accessable only inside its block of statement


// var greetings = "Salam"
// if(true){
//     var greetings = "Walaikum as Salam"
//     console.log("Inside",greetings)
// }
//     console.log("Outside",greetings)


//     const greetings = "Salam"
// if(true){
//     const greetings = "Walaikum as Salam"
//     console.log("Inside",greetings)
// }
//     console.log("Outside",greetings)



// console.log(username)

// const username = "Mirza Sarim Baig"

// hello()


// function hello (){
//     const greetings = "Salam"
//     console.log("Inside",greetings)

// }


//Array

let greetings = ["salam","Asalam o alikum", "Kaifa haluk", "Hello", "How are you"]
console.log(greetings)

// greetings[6] = "Hi"
// greetings.push("hi")
// greetings.push("hi there")

// greetings.pop()

// greetings.shift()
// greetings.unshift("chah haal ha")

//SLICE: Returns a new array
//(index, length)
var selectedGreetings = greetings.slice(1,4)
console.log(selectedGreetings)

//SPLICE: Make changes in current array
//(staring-point , delete-count , values)

greetings.splice(3,0,true,88,null, undefined)
console.log(greetings)
