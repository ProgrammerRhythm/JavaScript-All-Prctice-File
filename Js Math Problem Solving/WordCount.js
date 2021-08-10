var spe = "Hey Everyone, Myself Rhythm";
var count = 0;
for(var i = 0; i < spe.length; i++){
    var charcter = spe[i];
    if(charcter==" " && spe[i-1] != " "){
        count++;
    }
}
count++;
console.log(count);