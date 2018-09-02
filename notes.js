var data = [{"name": "a", "sex":"M",} ]

function findFather (name){
 for (var i=0; i <data.name; i++){ //loop th
     if (name === data[i].name){ // name from data data[0].name --- key name
         return data[i].father  // return father name from data (meaning element in data)
     }
 }
}

function findGran (name){
    return findFather (findFather(name))
}

module.experts = {
    findFather : findFather,
    findGran : findGran
}

describe ('findGran()', function() {
    it ('someting', function()){
        expect (family.findGran).to..be.a('string')
    }
}