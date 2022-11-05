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


console.info();
// Consumer Part
const promise = createOrder(cart);
promise.then(function (cart) {
    return cart
})
    .catch(function (err) {
        console.log(err.message)
    })
    .then(function (orderDetails) {
        return proceedToPayment(orderDetails)
    })
    .catch(function (err) {
        console.log(err.message);
    })
    .then(function (paymentStatus) {
        return showOrderSummary(paymentStatus);
    })
    .catch(function (err) {
        console.log(err.message);
    })
    .then(function (Status) {
        return updateWallet(Status)
    })
    .catch(function (err) {
        console.log(err.message);
    })

function validateCard() {
    return true
}

// Producer Part
function createOrder(cart) {
    let orderItem = cart[0].parts;
    let price = cart[0].price;


    const prom = new Promise(function (resolve, reject) {
        if (validateCard()) {
            resolve({
                orderItem: orderItem,
                amount: price
            });
            console.info(`Your cart has ${orderItem} and its price is ${price}`);
        }
        else {
            const err = new Error("Cart is not valid");
            reject(err);
        }

    });

    return prom
}


function proceedToPayment(orderDetails) {
    return new Promise(function (resolve, reject) {
        let orderId = new Date().valueOf();
        let proceedToBuy = true;
        if (orderDetails.orderItem && proceedToBuy) {
            resolve({
                paymentStatus: "Success",
                Message: "Payment Done",
                OrderId: orderId
            });
            console.info(`Your payment succeeded. Your orderID is ${orderId}`);
        }
        else {
            reject({
                Status: "Failure",
                ErrorMessage: new Error("Payment Failed")
            });
        }
    });
}


function updateWallet(payment) {
    let balance = 22000;
    return new Promise(function (resolve, reject) {
        if (payment.Status == "Sucess") {
            balance = balance - cart[0].price;
            resolve(balance);
            console.info("Wallet successfully updated. New balance is", balance);
        }
        else {
            const err = new Error("Wallet Updation failed");
            reject(err);
        }
    });

}

function showOrderSummary(order) {
    return new Promise(function (resolve, reject) {
        if (order.Status == "Success") {
            resolve(obj = {
                DeliveredBy: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000), //5 days + current date
                Status: "Sucess"
            });
            console.info(`Order will be delivered by ${obj.DeliveredBy}`);
        }
        else {
            reject(err = {
                ErrorMessage: new Error("Order Summary is not valid"),
                Status: "Failure"
            });
        }
    });
}
