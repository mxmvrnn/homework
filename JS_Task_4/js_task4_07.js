/* 
Написать функцию, которая принимает строку в другую строку, 
после переданного номера слова
f(‘I am cool’,’very’,1) -> ‘I am very cool’
 */

function strInstr(str,incomStr,position){
    var arr = str.split(' ');
    arr.splice(position,0,incomStr);
    return arr.join(' ');
    
};
console.log(strInstr('Вышла Маша в гости к Глаше','123',2));




/*  var arr = [1, 2, 3, 4, 5];
    arr.splice(2,0,'asd')
console.log(arr); */