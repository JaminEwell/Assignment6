/*
Create an application which iterates numbers from 1 to 100. For multiples of 3, print "Marco!" instead of the number and for multiples of 5, print "Polo!" instead of the number. 
For numbers which are multiples of both 3 and 5 print "Marco! Polo!". 
This is a VERY common JavaScript interview question and you should know how to do this. 
You will need to take advantage of the modulus operator to accomplish this task.
*/



function marcoPolo() {

    var limit = 100;
    var count = 1;
    var result;



    while (count < limit) {
        if ((count % 3) === 0) {
            result = "Marco!";
        } else if ((count % 5) === 0) {
            result = "Polo!";
        } else if ((count % 5) === 0 && (count % 3) === 0) {
            result = "Marco! Polo!";
        }
        console.log(result);
        count++;
    }
}


//call function/ run app
//marcoPolo();