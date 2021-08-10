var numbers = [30,40,20,80,60,20,82,28,44,34];
var max = numbers[0];
numbers.unshift(120);
console.log(numbers)
for(var i = 0; i <numbers.length; i++){
    var element = numbers[i];
    if(element>max){
        max = element;
    }
}
console.log("Lebars Working Day's=",max);