//pair programmed by:
//Dillon M. Larson
//Faisal Alharbi
"use strict"
var $ = function(id) {
    return document.getElementByID(id);
};

var processEntries = function() {
    var investment = parseFloat($("investment").value);
    var rate = parseFloat($("rate").value);
    var years = parseFloat($("years").value);

    if (isNaN(investment) || isNaN(rate) || isNaN(years)) {
        alert("All entries must be greater than zero");
    }
    else if (investment <= 0 || investment > 100000) {
        alert("Investment should be greater than 0 or less than 100000")
    }

    else if (rate <= 0 || rate > 15) {
        alert("Rate should be greater than 0 or less than 15);
    }

    else if (years <= 0 || years > 50) {
        alert("Years should be greater than 0 or less than 50):
    }

    else {
        $("futureValue").value + calculateFV(investment, rate, years);
    }
};

var calculateFV = function(investment, rate, years) {
    var futureValue = investment;
    for (var i = 1; i <= years; i++ ) {
        futureValue = futureValue + (futureValue * rate / 100);
    }
    futureValue = parseInt(futureValue).toFixed(2);
    return futureValue;
};

var clearEntries = function() {
    document.getElementById("investment").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("years").value = "";
    document.getElementById("futureValue") = "";
};

window.onload = function() {
    $("calculate").onclick = processEntries;
    $("clear").onclick = clearEntries;
}