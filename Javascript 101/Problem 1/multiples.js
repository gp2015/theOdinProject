/* 
Multiples of 3 and 5
Problem 1
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.
*/

var myArr = [];
var total = 0;

for (var i = 0; i < 1000; i++) {
	if ((i % 3 == 0) || (i % 5 == 0)) {
        console.log("The number is: " + i);
        myArr.push(i);
    	console.log(myArr[myArr.length-1] + " is a multiple of 3 or 5");
    } else {
    	console.log(i + " is not a multiple of 3 or 5");
    }
}

for (var j = 0; j < myArr.length-1; j++) {
  	console.log("Index #: " + j);
    console.log("Adding " + myArr[j] + " to total");
	total += myArr[j];
    console.log("Running total: " + total);
}

console.log("The total is " + total);