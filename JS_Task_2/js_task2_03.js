function workAnArr(a,l){
    var namEven = 0,
        namOdd = 0,
        namNull =0,
        i;
    for(i = 0 ; i < l; i++){
        if ( a[i] == 0){
            namNull++;
        } else if ( a[i] % 2 == 1){
            namOdd++;
        } else if ( a[i] % 2 == 0){
            namEven++;
        }
    }
    console.log('Ваш массив состоит из : ' + namEven + ' четных элементов ' + namOdd + ' нечетных элементов ' + namNull +' нулевых элементов');
} 

 var arr = [1,2,3,4,5,6,7,8,9,0,0,0,0];
 k = arr.length;
 console.log(workAnArr(arr,k));   

