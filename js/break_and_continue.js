// do {
//     var oddnum = prompt("Enter odd number")
//
// } while (
//     isNaN (oddnum) || oddnum > 50 || oddnum < 0
//     )


do {
    var userInput = Number(prompt("Pick an odd number between" +
        "1 and 50:"));
    if (userInput % 2 === 0) {
        alert(userInput + "is not odd, please try again")
    } else if(userInput > 50) {
        alert(userInput + "is greater than 50, please try agian")
    } else if(userInput < 1) {
        alert(userInput + "is less than 1, please try again")
    } else {
        alert("You picked a good one!");
        break
    }
} while (true)