var names = ['Rhythm','Munshi','Akash','Boss','Rhythm','Akash'];
var newName = [];
for(var i = 0; i<names.length; i++){
    var element = names[i];
    var index = newName.indexOf(element);
    if(index == -1){
        newName.push(element)
    }
}
console.log(newName);