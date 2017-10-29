/* Написать функцию, которая принимает строку
и возвращает эту же строку, на с заглавным первым символом */


function strUp(str){
    return str[0].toUpperCase() + str.slice(1);
};

console.log(strUp('abcd'));