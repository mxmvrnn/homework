function checkArr (a,o){
    var len = o,
        d,
        i;
        for (i = 1; i < len ; i++){
            if( a[i-1] == a[ i ]){
                d = 'Ваш массив состоит из одинаковых элементов';
            } else{
                d = 'Элементы вашего массива разнятся';
                break;
            }
        }           
    return d;  
}

var arr = [1, 1, 1, 1, 1,];
console.log(checkArr(arr,arr.length));
