let a =[1,2,3,4,5,6,7,8,9,0];

let b = a.filter((e,i)=>e%2===0);
console.log(b);

let c = a.map(e=>e*2);
console.log(c);

let e = a.some(e=>e%2===0);
console.log(e);

let d = a.every(e=>e<5);
console.log(d);

let x = a.reduce((prev,elem,index)=> prev+elem,0);
console.log(x);


let sumsqreven = a.filter(e=>e%2===0).map(e=>e*e).reduce((p,e)=>p+e,0);
console.log(sumsqreven);

a.forEach((e,i)=>console.log(i+"=>"+e));



let arr2 = [2,67,3,7,3,4,8,9];
arr2.sort((e1,e2)=>{
    if(e1>e2) return -1;
    if(e1===e2) return 0;
    return 1;
});
console.log(arr2);