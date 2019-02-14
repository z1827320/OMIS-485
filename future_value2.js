"use strict"
var $ = function (id) {
    return document.getElementById(id);
};

var calculateFV = function(investment, rate, years) {
    var futureValue = investment;
    for (var i = 1; i <= years; i++ ) {
        futureValue = futureValue + (futureValue * rate / 100);
    }
    futureValue = parseInt(futureValue);
};

var processEntries = function() {
    var investment = parseFloat($("investment").value);
    var rate = parseFloat($("rate").value);
    var years = parseFloat($("years").value);
    if (isNaN(investment) || isNaN(rate) || isNaN(years)) {
        alert("All entries must be greater than zero");
    } else if (investment <= 0 || rate <= 0 || years <= 0) {
        alert("All entries must be greater than zero");
    } else {
        $("futureValue").value = calculateFV(investment, rate, years);
    }
};



var clearEntries = function() {
    document.getElementById("investment").value = "";
    document.getElementById("rate").value = "";
    document.getElementById("years").value = "";
    document.getElementById("futureValue").value = "";
};

window.onload = function() {
    $("calculate").onclick = processEntries;
    $("clear").onclick = clearEntries;
};