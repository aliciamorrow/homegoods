"use strict";
module.exports = {
    getGTIN: function() {
        var checkdigit,
            sum = 0,
            indicator = "0",
            randomNum = new Date().getTime().toString();

        randomNum = indicator + randomNum.substr(1, 13);

        checkdigit = this.calCulateCheckDigit(randomNum);

        return randomNum + checkdigit;
    },

    calCulateCheckDigit: function(gtin) {

        var data, sum=0, checkdigit;

        gtin = Number(gtin);

        if (isNaN(gtin)) {
            return new Error("Argument" + gtin + "is not valid type number");
        }
        data = ('' + gtin).split('').reverse();

        for (var i = 0; i < data.length; i++) {
            var num = parseInt(data[i]);

            if (i % 2) {
                sum += num;
            } else {
                sum += num * 3;
            }
        }

        checkdigit = (Math.ceil(sum / 10) * 10 - sum);

        return checkdigit;

    }

};
