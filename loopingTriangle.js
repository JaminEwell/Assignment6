/*
Write a loop that displays the following triangle within a console window:
#
##
###
####
#####
######
#######
*/

function printTriangle() {

    var count = 7;
    var triangle = '';

    for (var i = 0; i < count; i++) {
        triangle += '#';
        console.log(triangle);
    }



}

//call function
//printTriangle();