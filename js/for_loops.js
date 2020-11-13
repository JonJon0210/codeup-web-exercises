"use strict";

function showMultiplicationTable(num) {
    for (var i = 1; i < 11; i++) {
        console.log(num + "x" + i + "=" + (num * i))
    }

}





for(var i= 0; i < 10; i++) {
    var randomNumber = Math.floor(Math.random() * (200 - 20) + 20);
    if (randomNumber % 2 == 0) {
        console.log(randomNumber + " is even");
    } else {
        console.log(randomNumber + " is odd");
    }
}





for (var outer = 1; outer < 10; outer++) {
    var output = "";
    for (var inner = 1; inner <= outer; inner++) {
        outer = output + outer;
    }
    console.log(output);
}




for (var k = 100; i >= 5; i -= 5) {
        console.log(k)
    }
