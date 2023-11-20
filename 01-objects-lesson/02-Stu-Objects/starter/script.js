//WRITE YOUR CODE BELOW
var customerOrder = {
    drinkName: "coffee",
    sugars: 5,
    orderReady: false,
}

console.log(customerOrder.drinkName)
console.log(customerOrder.sugars)

console.log(customerOrder["drinkName"])
console.log(customerOrder["orderReady"])

if (customerOrder.orderReady) {
    console.log("Ready for pick-up: " + customerOrder.drinkName + " with " + customerOrder.sugars + " sugars.")
}else {
    console.log("Still in order queue: " + customerOrder["drinkName"] + " with " + customerOrder["sugars"] + " sugars.")
}

var nums = "";

for ( var i in customerOrder) {
    nums += customerOrder[i] + " ";
}

console.log(nums)