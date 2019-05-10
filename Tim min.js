let array=[23,34,6,-1,4,6,3,6,4];
let array1=[];
let array2=[23,5,7,4,3,1,3,6,7,8];
function minArray(arr) {
    if (arr.length==0){
        return -1 ;
    }else{
        let min=arr[0];
        for (i=0;i<arr.length;i++){
            if (arr[i]<min){
                min=arr[i];
            }
        }
        for (i=0;i<arr.length;i++){
            if (arr[i]==min){
                return i;
            }
        }
    }
}
let min=minArray(array2);
// let min=minArray(array1);
// let min= minArray(array);
document.getElementById('min').innerHTML = min;