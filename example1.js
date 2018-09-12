function mapElems(arr, delegate) {
    let res = [];
    for (let i = 0; i < arr.length; i++) res.push(delegate(arr[i], i))
    return res;
}

function filterElems(arr, delegate) {
    let res = [];
    for (let i = 0; i < arr.length; i++)
        if (delegate(arr[i], i)) res.push(arr[i]);
    return res;
}

function someElems(arr, delegate) {
    for (let i = 0; i < arr.length; i++)
        if (delegate(arr[i], i)) return true;
    return false;
}

function allElems(arr,delegate){
    for (let i = 0; i < arr.length; i++)
        if (!delegate(arr[i], i)) return false;
    return true;
}


let a = [1, 2, 3, 4, 5, 6];
let b = allElems(a, (e, i) => e<10);
console.log(b);









