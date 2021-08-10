var business = 234801323;
var Bcs_Cader = 40823251;
var Jomidar = 1000;
// Simple System 
var max = Math.max(business,Bcs_Cader,Jomidar);
console.log(max); 

// or 
if(business > Bcs_Cader){
    if(business>Jomidar){
        console.log('Ami business man,Tomar Abbur thake o Boroloks')
    }
    else{
        console.log('Dhur Mia,Amr Bogso Hoitece Jomidar er Bogso,Tora borolok koilei hoa Jebi')
    }
}
else{
    if(Bcs_Cader>Jomidar){
        console.log("Ami sara din pora suna kore Bcs Cader Hoi ki vikha Korbo,Ami Sob thake Borolok")
    }
    else{
        console.log("Dhur Mia,Amr Bogso Hoitece Jomidar er Bogso,Tora borolok koilei hoa Jebi")
    }
}