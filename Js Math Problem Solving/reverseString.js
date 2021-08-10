function changeTextToAlianText(stg){
    var reverse = "";
    for(var i =0;i< stg.length; i++){
        var char = stg[i];
        reverse = char + reverse;
    }
    return reverse;
}
var element ="Hi amr Alian Bhai Brother,Ki Obosta Tomader??"
console.log(changeTextToAlianText(element));