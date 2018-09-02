

module.exports = function () {
    this.emptyArray = []; // accessible var
    this.addToList = function (number) {
        return this.emptyArray.push(number)
    };

    this.sortedListRet = function(){
        return this.emptyArray.sort();
    }
}




