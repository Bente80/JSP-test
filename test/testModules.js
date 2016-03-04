/**
 * Created by Bente on 02-03-2016.
 */

//Mocha is a feature-rich JavaScript test framework running on Node.js and the browser, making asynchronous testing
// simple. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions
// to the correct test case.
// Mocha can use any assertion library Assertions, but here I have used Chai.
// Mocha is used for unit and integration testing, and it's a great candidate for BDD (Behavior Driven Development).


var expect = require("chai").expect;
var adder = require("../module");

describe("Test calculator", function(){

    it("should return 4", function(){
       expect(adder.add(2,2)).to.be.equal(4);                       // Testing the add method
    })

    it("should return 1", function(){
        expect(adder.subtrack(3,2)).to.be.equal(1);                 // Testing the subtrack method
    })

    it("should return 10 asynchronouesly", function(done){
        adder.addAsync(5,5,function(res){                           // Testing the addAsync method
            expect(res).to.be.equal(10);
            done();
        })
    })

    // Here I assert that the function target will throw a specific error.
    it("should return false if 0 in one of the n´s", function(){
    var err = new ReferenceError('Attempt to divide by zero');
    var fn = function () { throw err; }
    expect(fn).to.throw(ReferenceError);                            // Testing the divide method with throw claus
    })

    // This is way to test the divide function I wrap my code in anonymos.
    it("*should also return false if 0 in one of the n´s", function() {
        expect(function () {
            adder.divide(0, 2);                                     // Testing the divide method with throw claus with parameters.
        }).to.throw(Error,"Attempt to divide by zero");
    })
})