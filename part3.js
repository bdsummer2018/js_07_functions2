// function(arguments) {
//
// }
//
// (arguments)=>{
//
// }

function filterElems(arr,delegate){
    let result = [];
    for(let i=0;i<arr.length;i++){
        if(delegate(arr[i],i)) result.push(arr[i]);
    }
    return result;
}


let a = [54,4,6,9,7,2];

//let b = filterElems(a,function (e,i) {return e%2===0;});
//let b = filterElems(a,(e,i)=>{return e%2===0;});
let b = filterElems(a,e=>e%2===0);
console.log(b);
