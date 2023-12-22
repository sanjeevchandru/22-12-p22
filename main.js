document.write("22. to compute the union of two arrays"+"<br>");
document.write("the two array's [1, 2, 3], [100, 2, 1, 10] "+"<br>");
function test22(arr1,arr2){
    var x=arr1.concat(arr2);
    var obj={};
    var y=[];
    for(let i=0;i<x.length;i++){
        obj[x[i]]=0;
    }
    for(i in obj){
        y.push(i);
    }return y;
}
document.write("ans: "+test22([1, 2, 3], [100, 2, 1, 10])+"<br><br>");