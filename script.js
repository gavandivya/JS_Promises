// Practising Promises
// Promise is an object representing eventual completion or failure of an asyncronous operation

// Task1 using fetch
const showPromise = fetch("https://api.github.com/users/gavandivya");
const showRejectedPromise = fetch("https://github.com/gavandivya");
console.info(showPromise);

showPromise.then(console.info(showPromise));

setTimeout(function () {
    console.info(showPromise);
}, 6000);

setTimeout(function () {
    console.info(showRejectedPromise);
}, 6000);


//Task to be performed

//Create Order
//Proceed To Payment
//Show Order Summary
// Update wallet