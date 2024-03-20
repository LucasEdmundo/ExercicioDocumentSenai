// console.log("hi, i am index.js")
// let favoriteFood = "hot dog"
// document.getElementById("text").innerHTML=favoriteFood

function discountCalc(price, discount){
    let total = price - (price * discount /100) 
    return total
}


let discountValue = discountCalc(200, 15)
document.getElementById("text").innerHTML=discountValue