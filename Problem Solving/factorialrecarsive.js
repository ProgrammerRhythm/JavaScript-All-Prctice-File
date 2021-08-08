function Factorial(n) {
    if(n==0){
        return 1;
    }
    else{
        return n*Factorial(n-1);
    }
}
var result = Factorial(4);
console.log(result);