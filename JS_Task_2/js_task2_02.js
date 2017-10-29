function workAnArray(a){
    var len=a.length;
    for (i = 0; i < len; i++ ){
        console.log (a[i]);
        
    }
    console.log('Колличество элементов в вашем массиве ' + len);
}

var arr=[11, 2123, 'str'];
var arr1=[11, 2123, 'str', 256];
workAnArray(arr);
workAnArray(arr1);
   
