// let userName = prompt("Enter your name")

// console.log(userName)


// let num1 = +prompt("Enter Num1")
// let num2 = +prompt("Enter Num2")

// console.log(num1 / num2)


// CONDITIONAL STATEMENTS ( IF / ELSE )


//if keyword, condition, block of statement

// if( 10 == 11 ){
//     console.log("Both values are equal and the condition is true")
// }else{
//     console.log("Values are different")
// }


// let percent = +prompt("Enter your Intermediate Percentage");

// if( percent > 80){
//     console.log("Admission in Fast")
// } else if(percent > 70){
//     console.log("Admission in NED")
// }else if ( percent >= 50){
//     console.log("Admission in Indus")
// }
// else{
//     console.log("No study")
// }



// ICE-CREAM BILL GENERATOR

let modePrice;
let flavorPrice;

//User Inputs

let flavor = prompt("Select your Flavor: Mango, Chocolate, Strawberry")
let noOfScopes = +prompt("Enter number of scopes");
let typeOfServing = prompt("Select: Cup or Cone");


if(flavor == "mango"){
    flavorPrice=100
}else if(flavor == "chocolate"){
    flavorPrice=80
}else if(flavor == "strawberry"){
    flavorPrice=120
}

if(typeOfServing == "cup"){
    modePrice=50
}else{
    modePrice=80
}

let totalPrice = flavorPrice * noOfScopes
let totalPriceOfMode = noOfScopes * modePrice

totalPrice = totalPrice + totalPriceOfMode

console.log(totalPrice)
