/*
Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window. 
Sample Output:
"0 is even" 
"1 is odd" 
"2 is even"
*/


function oddOrEven() {

    var count = 15;

    for (var i = 0; i <= count; i++) {
        if (i % 2 == 0) {
            console.log(i + " is even");
        } else {
            console.log(i + " is odd");
        }


    }


}

//call function 
// oddOrEven();