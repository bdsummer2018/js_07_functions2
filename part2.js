function forEachElem(arr,delegate) {
    for(let i=0;i<arr.length;i++) delegate(arr[i],i);
}

function filterElems(arr,delegate){
    let result = [];
    for(let i=0;i<arr.length;i++){
        if(delegate(arr[i],i)) result.push(arr[i]);
    }
    return result;
}


let a = [54,4,6,9,7,2];

let b = filterElems(a,function (e,i) {return e%2===0;});
console.log(b);


