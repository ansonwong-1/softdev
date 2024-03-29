// Team Insert:: Anson Wong, Talia Hsia 
// SoftDev pd2
// K27 -- Basic functions in JavaScript
// 2023-04-04
// --------------------------------------------------


// as a duo...
// pair programming style,
// implement a fact and fib fxn

function fact(n){
    if (n < 2){
        return 1;
    }return (n * (fact(n - 1)));
}
console.log(fact(1)); //"...should be  1"
console.log(fact(2));
console.log(fact(3));
console.log(fact(4));
console.log(fact(5));

function fib(n){
    if(n < 2){
        return n;
    }return (fib(n - 1) + fib(n - 2));
}

console.log(fib(0)) //;"...should be  0"
console.log(fib(1)) 
console.log(fib(2))
console.log(fib(3))
console.log(fib(4))


//Do whatever you think is needed. Think: S I M P L E.   Think: S M A R T.
