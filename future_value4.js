    //pair programmed by
    //Dillon M. Larson
    //Faisal Alharbi
"use strict"
var $ = function (id) {
    return document.getElementById(id);
};

var processEntries = function() {
    var investment = parseFloat($("investment").value);
    var rate = parseFloat($("rate").value );
    var years = parseFloat($("years").value);

    if (isNaN(investment) || isNaN(rate) || isNaN(years)) {
        alert("All entries must be greater than zero");
    } 
    else if (investment <= 0 || investment > 100000) {
        alert('Investment should be greater than 0 or less than equal to 100000')
    }

    else if (rate <= 0 || rate > 15) {
        alert('Rate should be greater than 0 or less than equal to 15')
    }

    else if (years <= 0 || years > 50) {
        alert('Year should be greater than 0 or less than equal to 50')
    }

    else {
        $("futureValue").value = calculateFV(investment, rate, years);
    }
};

var calculateFV = function(investment, rate, years) {
    var futureValue = investment;
    for (var i = 1; i <= years; i++ ) {
        futureValue = futureValue + (futureValue * rate / 100);
    }
    futureValue= parseInt(futureValue).toFixed(2);
    return futureValue;
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
