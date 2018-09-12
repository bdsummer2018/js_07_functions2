function summ(a,b) {
    let s = 0;
    for(let i=0;i<arguments.length;i++) s+=arguments[i];
    return s;
}

console.log(summ(1,2,3,4));