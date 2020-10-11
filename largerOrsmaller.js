//Create an application that accepts two integers within two separate prompts. 
//Then, display only the larger of the two within the browser window. Don’t forget to handle the fact that the two could be equal.

function displayLarger(num1, num2) {
    var num1 = prompt("Please enter first number.");
    var num2 = prompt("Please enter second number.");

    if (num1 > num2) {
        document.write(num1 + " " + "is the largest");
    }
    if (num1 < num2) {
        document.write(num2 + " " + "is the largest");
    } else if (num1 == num2) {
        document.write("Umm both numbers are equal.");
    }



}