//ARRAY

// let fruits = ["apple","mango","pineapple"]
// console.log(fruits)

// fruits.push("orange")
// console.log(fruits)

// fruits.pop()
// console.log(fruits)

// let sortedFruits = fruits.slice(0,-1)
// console.log(sortedFruits)

// fruits.splice(1,0,"strawberry")
// console.log(fruits)



// let fruits = ["apple","mango","pineapple","strawberry"]
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])


//LOOP

// for (initialization; condition; increment / decrement) {
// }

// for(var i=0; i< fruits.length; i++){
// console.log(fruits[i])
// }

// for(var i=1; i<=10; i++){
// console.log("2 x ",i,"=", 2*i)
// }

// console.log("2 x 1 = 2")
// console.log("2 x 2 = 4")
// console.log("2 x 3 = 6")


var userNames = []

for(var i=0; i<5; i++){
    userNames.push(
    prompt("Enter your name")
    )
}
console.log(userNames)


let loginName = prompt("Enter the name to login")

// for(var j=0; j<userNames.length; j++){
//     if(userNames[j]==loginName){
//         alert("You are logged in")
//     }
// }

var userLogin = false

for(var j=0; j<userNames.length; j++){
    if(userNames[j]==loginName){
        userLogin= true
    }
}


if(userLogin){
    alert("You are logged in")
}else{
    alert("Not authorized")
}