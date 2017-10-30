/* Написать функцию, которая принимает строку и возвращает эту же строку, 
на с заглавным первым символом каждого слова */


function upFirstStr(str){
    var arrOfStr = str.split(' ');
    for( var i = 0; i < arrOfStr.length; i++){
        arrOfStr[i]=arrOfStr[i][0].toUpperCase() + arrOfStr[i].slice(1);
    };
   return arrOfStr.join(' ');

};
console.log(upFirstStr('qwe asd fff'));