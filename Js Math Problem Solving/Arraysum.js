var numbers = [30,40,20,80,60,20,82,28,44,34];
var number = 0;
for(var i = 0; i < numbers.length; i++){
    var element = numbers[i];
    number = element+number;
}
console.log(number)
// Or 
function Sum(Num){
    var total= 0;
    for(var i=1; i<Num.length; i++){
        var element = Num[i];
        total = element+total;
    
    }
    return total;
}
var yo = [30,40,20,80,60,20,82,28,44,34];
var result= Sum(yo);
console.log(result);