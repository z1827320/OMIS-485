"use strict"
var $ = function (id) {
    return document.getElementById(id);
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

var calculateFV = function(investment, rate, years) {
    var futureValue = investment;
    for (var i = 1; i <= years; i++ ) {
        futureValue = futureValue + (futureValue * rate / 100);
    }
    futureValue= parseInt(futureValue);
};

window.onload = function() {
    $("calculate").onclick = processEntries;
    $("clear").onclick = clearEntries;
};

var clearEntries = function() {
    document.getElementById("investment").value = ""; //should clear the text box
    document.getElementById("rate").value = ""; //should clear the text box
    document.getElementById("years").value = ""; //should clear the text box
    document.getElementById("futureValue").value = ""; //should clear the text box
}