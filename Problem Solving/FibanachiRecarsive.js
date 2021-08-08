function Fibanachi(n) {
    if(n==0){
        return 0;
    }
    if(n==1){
        return 1;
    }
    else{
        return Fibanachi(n-1)+Fibanachi(n-2);
    }
}
var result=Fibanachi(10);
console.log(result);