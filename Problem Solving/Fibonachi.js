// fibo[2]= fibo[2-1]+fibo[2-2]
// fib[3]=fibo[3-1]+fibo[3-2];
// fibo[4]=fibo[4-1]+fibo[4-2]
// fibo[n]=fibo[n-1]+fibo[n-2];
function fibonachi(num) {
    let fibo = [0, 1];
    for (i = 2; i <= num; i++) {
    fibo[i]=fibo[i-1]+fibo[i-2];
}
    return fibo;
}
var result= fibonachi(10);
console.log(result);
// or 
let fibo = [0, 1];
for (i = 2; i <= 10; i++) {
fibo[i]=fibo[i-1]+fibo[i-2];
console.log(fibo[i],fibo[i-1],fibo[i-2]);
}