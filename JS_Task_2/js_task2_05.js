function maxArr(a){
     max = a[0];
    len = a.length;
    for( var i = 0 ; i < len ; i++){
        if (a[i] > max){
            max = a[i];
        }   
    }
    return max;
}

var arr = [1, 213, 33,452, 0];
 console.log(maxArr(arr));