/* Написать функцию, которая ищет одну строку в другой строке 
и возвращает true, если такая строка найдена. */

function checkInclude(str){
    return str.includes(searchStr);
    
};

var str = 'kek makek param pam',
    searchStr = '123';
    // searchStr = 'makek';

console.log(checkInclude(str));

