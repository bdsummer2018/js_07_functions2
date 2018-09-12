

var getNext = (function() {
    var i=0;
    return function(){
        return i++;
    };
})();






console.log(getNext());
console.log(getNext());
console.log(getNext());
console.log(getNext());
console.log(getNext());