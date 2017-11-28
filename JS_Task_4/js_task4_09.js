/* Написать функцию, которая посчитает сколько раз каждый символ встречается в строке
f(‘abbac’) // в консоле a:2, b:2, c:1 */



function countLet(str){
    var letBasket = {};
    for ( var i = 0 ; i < str.length ; i++){        
        if (letBasket.hasOwnProperty(str[i]) == false ) {
            letBasket[str[i]] = 1;
        } else {
            letBasket[str[i]] += 1;
        }
    } return letBasket
} 
console.log(countLet('ss 12123 ff aaabbbssscccqqwezxccccc 123'));
