/* Написать функцию, которая принимает строку 
и возвращает данную строку, но в camelCase нотации */

function strCamellNatacion(str){
    var arrOfStr = str.split(' ');
    for( var i = 1; i < arrOfStr.length; i++){
        arrOfStr[i]=arrOfStr[i][0].toUpperCase() + arrOfStr[i].slice(1);
    };
   return arrOfStr.join('');

};
console.log(strCamellNatacion('str camell natacion'));