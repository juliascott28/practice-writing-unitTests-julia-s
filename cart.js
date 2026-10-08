//add items
    // wrong code
    // function addItem(cart, item, quantity) {
    //     cart.push({item: item, quantity: quantity})
    //     return cart
    // }

function addItem(cart, item, quantity) {
    if (quantity > 0) {
        cart[item] = quantity;
        return cart;
    } else {
    return {};
    }
}
//remove items
function removeItem(cart, item){
    const rem = cart.indexOf(cartItem => cartItem.name === item)
    if (rem !== -1){
        cart.splice(rem, 1);
    }
    return cart
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