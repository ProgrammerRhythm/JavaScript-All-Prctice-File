function brickcalculetor(height) {
    if(height<=10){
        var element3 = height * 15 * 1000;
        return element3;
    }
    else{
    var n = 10;
    var ue = height-n;
    var he = height-ue;
    var ke = ue - he;
    ue = ue-ke;
    for (var i = 1; i <= he; i++) {
        if(he<=10){
            var element = he * 15 * 1000;
        }
    }
        for(i=1; i <= ue; i++){
            if(ue<=10){
                var element2 = ue * 12 * 1000;
                }        
        }
        for(i=1; i <= ke; i++){
        if(ke<30){
            var element4= ke*10*1000;
        }
    }
        if(height<=21){
    var total=element+element2;
    return total;
    }
}
var total = element4+element2+element;
return total;

} 
var result = brickcalculetor(30);
console.log(result);