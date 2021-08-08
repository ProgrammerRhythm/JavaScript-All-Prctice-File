num = 5;
for(i=2; i < num; i++){
    if(num%i==0){
        console.log(`এইটা একটা মৌলিক সংখ্যা না`);
        break;
    }
    else{
        console.log(`এইটা একটা মৌলিক সংখ্যা`);
        break;
    }
}