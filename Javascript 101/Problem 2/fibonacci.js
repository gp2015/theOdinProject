var fib = [];
var even = [];
var total = 0;

for (var i = 0; i < 89; i++) {
	console.log("i is currently: " + i);
    fib.push(i);
    console.log("fib is: " + fib[fib.length-1]);
    
    for (var j = 0; j < fib.length; j = j + fib[fib.length]) {
    	console.log("j is currently: " + j);
        console.log("fib inside j is: " + fib[fib.length-1]);
        if (j % 2 == 0) {
        	console.log("total before adding j is
        }
    }
    console.log("The total is: " + total);
}