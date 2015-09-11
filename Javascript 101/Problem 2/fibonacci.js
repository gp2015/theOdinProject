var even = [];
var fib = [];
var total = 0;

fib[0] = 1;
fib[1] = 2;

for (var i = 2; i < 35; i++) {
	fib[i] = fib[i-1] + fib[i-2];
    if ((fib[i] < 4000000) && (fib[i] % 2 == 0)) {
    	even.push(fib[i]);
        console.log(even);
    }
}

for (key in even) {
	total += even[key];
}
    
console.log(total);