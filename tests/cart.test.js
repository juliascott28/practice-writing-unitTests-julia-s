const myCart = require('../cart.js');

//*addItem*
describe("addItem", function(){
    //positive
    test('Should add item to cart when given item and quantity',
        function(){
            expect(myCart.addItem({"apple": 1})).toEqual({"apple": 1})
        }
    )
    //negative
    test('Should return empty if zero quantity is entered',
        function(){
            expect(myCart.addItem({"apple": 0})).toEqual({})
        }
    )
})
    

    //edge

//*removeItem*
    //positive

    //negative

    //edge

//*totalItem*
    //positive

    //negative

    //edge