var data = [{"name": "a", "sex":"M",} ]

function findFather (name){
 for (var i=0; i <data.name; i++){ //loop th
     if (name === data[i].name){ // name from data data[0].name --- key name
         return data[i].father  // return father name from data (meaning element in data)
     }
 }
}


var family = requre('/.family') // connecting the file
//console.log(family.findFather("Carolus")); //
//console.log(family.findGran("Emile"))