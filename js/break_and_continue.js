

while(isNaN(userNum) || (userNum % 2 === 0) || (userNum < 1) || (userNum > 50)) {
    var userNum = prompt("Please enter an odd number between 1 and 50")
}


console.log("Number to skip is:" + userNum);

for(var i = 1; i < 50; i++) {
    if (i == userNum) {
        console.log("Yikes! Skipping number: " + i);
        continue;
    } else if (i % 2 === 0) {
        continue;
    } else {
        console.log("Here's an odd number: " + i);
    }
}