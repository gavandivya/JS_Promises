// Practising Promises
// Promise is an object representing eventual completion or failure of an asyncronous operation

// Task1 using fetch
const showPromise = fetch("https://api.github.com/users/gavandivya");
console.info(showPromise);

const showRejectedPromise = fetch("https://github.com/gavandivya"); //used just for rejecting purpose

showPromise.then(function () {
    console.info(showPromise)
});

setTimeout(function () {
    console.info(showPromise);
}, 6000);

setTimeout(function () {
    console.info(showRejectedPromise);
}, 6000);

//Task2 creating our own promise

cart = [{
    parts: "Monitor",
    price: 10000
},
{
    parts: "Keyboard",
    price: 1200
},
{
    parts: "Mouse",
    price: 900
},
{
    parts: "CPU",
    price: 5000
}];


console.info();
// Consumer Part
const promise = createOrder(cart);
promise.then(function (cart) {
    return cart
})
    .catch(function (err) {
        console.log(err.message);
    })
    .then(function (orderDetails) {
        return proceedToPayment(orderDetails)
    })
    .catch(function (err) {
        console.log(err.ErrorMessage.message);
    })
    .then(function (paymentStatus) {
        return showOrderSummary(paymentStatus);
    })
    .catch(function (err) {
        console.log(err.ErrorMessage.message);
    })
    .then(function (Status) {
        return updateWallet(Status)
    })
    .catch(function (err) {
        console.log(err.message);
    })
// .finally(function () {
//     console.info("Finally I got printed after 4 then and 4 catch😂")
// })

function validateCard() {
    return true
}

// Producer Part

//Create Order

function createOrder(cart) {
    let orderItem = cart[0].parts;
    let price = cart[0].price;


    const prom = new Promise(function (resolve, reject) {
        if (validateCard()) {
            resolve({
                orderItem: orderItem,
                amount: price
            });
            console.info(`Your cart consist Product Name - ${orderItem}, Price - Rs ${price}`);
        }
        else {
            const err = new Error("Cart is empty");
            reject(err);
        }

    });

    return prom
}


//Proceed To Payment
function proceedToPayment(orderDetails) {
    return new Promise(function (resolve, reject) {
        let orderId = new Date().valueOf();
        let proceedToBuy = false;
        if (orderDetails != undefined && orderDetails.orderItem && proceedToBuy) {
            resolve({
                paymentStatus: "Success",
                Message: "Payment Done",
                OrderId: orderId
            });
            console.info(`Your payment is successful. OrderID - ${orderId}`);
        }
        else {
            reject({
                Status: "Failure",
                ErrorMessage: new Error("Can't proceed to payment")
            });
        }

    });
}

//Show Order Summary
function showOrderSummary(order) {
    return new Promise(function (resolve, reject) {
        if (order != undefined && order.paymentStatus == "Success") {
            resolve(obj = {
                Status: "Sucess",
                DeliveredBy: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString(), //5 days + current date
            });
            console.info(`Order will be delivered by ${obj.DeliveredBy}`);
        }
        else {
            reject(err = {
                Status: "Failure",
                ErrorMessage: new Error(`Order Summary not available`)
            });
        }
    });
}

// Update wallet
function updateWallet(payment) {
    let balance = 22000;
    return new Promise(function (resolve, reject) {
        if (payment != undefined && payment.Status == "Sucess") {
            balance = balance - cart[0].price;
            resolve(balance);
            console.info("Wallet updated successfully. New balance is", balance);
        }
        else {
            const err = new Error("Wallet Updation failed");
            reject(err);
        }
    });

}