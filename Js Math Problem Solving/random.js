// Some Impotant Thing 
var num = 22; //Inteser 
var num2= 12.1; //Float
var num3= 2.999999;
var num4 = 4.511111;
var num5 = 4.499999;
var result= Math.ceil(num2);
var result2 = Math.floor(num3);
var result3 = Math.round(num4)
var result4= Math.round(num5);
console.log(result,result2,result3,result4);



// Main Code 
var random = Math.random()*10;
var result5 = Math.floor(random);
console.log(result5);



// By useing For loop 
for (var i = 1; i <= 42; i++){
    var random2 = Math.random()*6;
    var result6 = Math.round(random2);
    console.log(i,'=',result6)
}