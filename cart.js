//add items
    // wrong code
    // function addItem(cart, item, quantity) {
    //     cart.push({item: item, quantity: quantity})
    //     return cart
    // }

function addItem(cart) {
    const item = Object.keys(cart)[0];
    const quantity = cart[item];

    if (quantity > 0) {
        return cart;
    }

    return {};
}
//remove items
function removeItem(cart, item) {
    delete cart[item];
    return cart;
}
//total items
function getTotalItems(cart){
    let total = 0
    for (let i = 0; i < cart.length; i++){
        total += cart[i].quantity
    }
    return total
}

module.exports = {addItem, removeItem, getTotalItems}

// let myCart = []
// let add = addItem(myCart, "apple", 3)
// console.log(myCart)

// let myCart2 = []
// let remove = removeItem("apple", 1)
// console.log(myCart2)


// console.log(getTotalItems(myCart))