const myCart = require('../cart.js');

//*addItem*
describe('addItem', () => {
    //positive
    test('Should add item to cart when given item and quantity',
        () => {
            expect(myCart.addItem({'apple': 1})).toEqual({'apple': 1})
        }
    )
    //negative
    test('Should return empty if zero quantity is entered',
        function(){
            expect(myCart.addItem({'apple': 0})).toEqual({})
        }
    )
    //edge
})

//*removeItem*
describe('removeItem', function(){
    //positive
    test('Should remove prompted item from cart', function(){
        expect(myCart.removeItem({'apple': 1}, 'apple')).toEqual({})
    })
    //negative
    test('Should not change cart if item does not exist', function(){
        expect(myCart.removeItem({'apple': 1}, 'banana')).toEqual({'apple': 1})
    })
    //edge
})

//*totalItem*
describe('totalItem', function(){
        //positive
    test('Should return total items in array', function(){
        let cart = [{item: 'apple', quantity: 1}]
        expect(myCart.getTotalItems(cart)).toBe(1)
    })
})
    //negative

    //edge