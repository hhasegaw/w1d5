var store = require('./storeNumersInFile.js');

var storer = new store();
storer.addToList(15)
storer.addToList(16)
storer.addToList(21)
storer.addToList(19)
storer.addToList(24)

console.log(storer.sortedListRet());