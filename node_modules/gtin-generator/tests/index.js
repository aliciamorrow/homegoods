"use strict";

var should = require('chai').should(),
    gtinGenerator = require('../index');


describe('#getGTIN', function() {
    it('Should retun a gtin with 14 digits length', function() {
        gtinGenerator.getGTIN().should.have.length(14);
    });
});

describe('#calCulateCheckDigit', function() {
    it('Check digit test 1', function() {
        var num = "0441752720627";
        gtinGenerator.calCulateCheckDigit(num).should.be.equal(7);
    });


    it('Check digit test 2', function() {
        var num = "0441752720629";
        gtinGenerator.calCulateCheckDigit(num).should.be.equal(1);
    });

    it('Check digit test 3', function() {
        var num = "0441752720780";
        gtinGenerator.calCulateCheckDigit(num).should.be.equal(9);
    });
});
