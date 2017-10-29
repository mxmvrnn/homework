/* Написать функцию, которая принимает два аргумента, 
строку и число. Если длина строки больше, чем переданное число, 
то строка урезается и в конец добавляется «…», 
так чтобы длина отрезанной строки вместе с «…» (три точки) равнялась 
переданному числу */

function truncateString(str,num){
    if (str.length > num && num>3){
        console.log(str.slice(0,(num-str.length-3)) + '...');
    } else {
        return str;
}
};
// console.log(truncateString("A-tisket a-tasket A green and yellow basket", 11));

console.info(str);

