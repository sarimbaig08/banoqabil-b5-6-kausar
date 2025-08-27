
// let num1 = +prompt("Enter num1");
// let num2 = +prompt("Enter num2")

// console.log(num1 + num2)

// let userName = prompt("Enter your Username")
// console.log(userName)


//CONDITIONAL STATEMENTS if / else

// if keyword, condition(), block of statement{}

// if(1 == 1){
//     console.log("Values are equal")
// }else{
//     console.log("Values are different")
// }

// let percent=50

// if(percent >= 80){
//     console.log("Eligible for FAST")
// }else if(percent >= 70){
//     console.log("Eligible for KU")
// }else if(percent >= 60){
//     console.log("Eligible for KIET")
// }
// else if(percent >= 50){
//     console.log("Eligible for IQRA")
// }
// else{
//     console.log("Not Eligible")
// }


// let gender = prompt("Enter your Gender")

// if(gender == "male"){
//     console.log("Available slots are: Mon(6pm-8pm), Wed(8pm-10pm)")
// }else if(gender == "female"){
//     console.log("Available slots are: Mon(12pm-2pm), Wed(1pm-3pm)")
// }else{
//     console.log("Please enter correct gender in small letters")
// }



//ICE-CREAM BILL GENERATOR


let flavor = prompt("Please select a flavor: Mango, Pineapple, Blueberry")
let noOfScopes = +prompt("Enter number of scoops")
let mode = prompt("Please select a mode: Cup or Cone")

let flavorPrice;
let modePrice;

if(flavor == "mango"){
    flavorPrice = 150
}else if(flavor == "pineapple"){
    flavorPrice = 120
}else if(flavor == "blueberry"){
    flavorPrice = 100
}else{
    console.log("Please select flavor from given options")
}

if(mode == "cup"){
    modePrice = 50
}else if(mode == "cone"){
    modePrice=80
}else{
    console.log("Please select correct mode")
}


let totalModePrice= noOfScopes * modePrice
let totalFlavorPrice = noOfScopes * flavorPrice

let totalAmount = totalModePrice + totalFlavorPrice

console.log("Selected Flavor:", flavor)
console.log("Selected Mode:", mode)
console.log("Number of Scoops:", noOfScopes)

console.log("Your total bill is:",totalAmount)