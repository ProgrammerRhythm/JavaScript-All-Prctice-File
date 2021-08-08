var a =10;
var b= 15;
console.log("Before the Swap,a=",a,",b=", b )
var tampo= a;
a = b;
b = a;
console.log("After the Swap,a=",a,",b=", b )
// Or 
var x = 50;
var y = 90;
console.log("Before the Swap,x=",x,",y=", y )
x = x+y;
y = x-y; 
x = x-y; 
console.log("After the Swap,x=",x,",y=", y )
// or 
let f = 1;
let g = 2;
[f, g] = [g, f];
console.log(f,g)