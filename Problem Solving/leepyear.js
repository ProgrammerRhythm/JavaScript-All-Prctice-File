let year=1700;
const leepyear = year % 4;
if((0 == leepyear % 4) && (0 != leepyear % 100) || (leepyear % 400 == 0)){
    console.log(year+","+`It's a leep Year`);
}
else{
    console.log(year+","+"No,It's Not a leep year");
}