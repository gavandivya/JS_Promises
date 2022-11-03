// Practising Promises
// Promise is an object representing eventual completion or failure of an asyncronous operation

// Task1 using fetch
// const showPromise = fetch("https://api.github.com/users/gavandivya");
// console.info(showPromise);


// const showRejectedPromise = fetch("https://github.com/gavandivya");

// showPromise.then(function () {
//     console.info(showPromise)
// });

// setTimeout(function () {
//     console.info(showPromise);
// }, 6000);

// setTimeout(function () {
//     console.info(showRejectedPromise);
// }, 6000);

//Task2 creating promise 

//Create Order
//Proceed To Payment
//Show Order Summary
// Update wallet

cart = [{
    parts: "Monitor",
    price: 10000
},
{
    parts: "Keyboard",
    price: 1000
},
{
    parts: "Keyboard",
    price: 500
},
{
    parts: "CPU",
    price: 1000
}];

// Consumer Part
const promise = createOrder(cart);
promise.then(function (orderId) {
    return orderId
})
    .catch(function (err) {
        console.log(err.message)
    })
    .finally(function () {
        console.log("Hiee Cart")
    })
    .then(function (orderId) {
        return proceedToPayment(orderId)
    })
    .catch(function (err) {
        console.log(err.message);
    })
    .finally(function () {
        console.log("Hiee Payment")
    })
    .then(function (orderId) {
        return showOrderSummary(orderId)
    })
    .catch(function (err) {
        console.log(err.message);
    })
    .finally(function () {
        console.log("Hiee summary")
    })
    .then(function (orderId) {
        return updateWallet(orderId)
    })
    .catch(function (err) {
        console.log(err.message);
    })
    .finally(function () {
        console.log("Hiee wallet")
    });

// Producer Part
function createOrder(cart) {
    const prom = new Promise(function (resolve, reject) {
        // console.info(validateCard());
        if (validateCard()) {
            const orderId = '12345';
            resolve(orderId);
        }
        else {
            const err = new Error("Cart is not valid");
            reject(err);
        }
    });
    // console.info(prom)
    return prom
}

function validateCard() {
    return true
}

function proceedToPayment(orderId) {
    return new Promise(function (resolve, reject) {
        if (validateCard()) {
            console.info(orderId);
            resolve(orderId);
        }
        else {
            const err = new Error("Payment is not valid");
            reject(err);
        }
    });
}

function showOrderSummary(orderId) {
    return new Promise(function (resolve, reject) {
        if (validateCard()) {
            resolve(orderId);
        }
        else {
            const err = new Error("Summary is not valid");
            reject(err);
        }
    });
}

function updateWallet(orderId) {
    return new Promise(function (resolve, reject) {
        if (validateCard()) {
            console.info(orderId);
            resolve(orderId);
        }
        else {
            const err = new Error("Update wallet is not valid");
            reject(err);
        }
    });

}
