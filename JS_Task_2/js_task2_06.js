/* Написать функцию, которая принимает на входе любое число, 
но не больше 1000 и определяет является ли оно простым и 
выводит простое число или нет. Если введено больше 1000, 
то выводится, что неверные данные. */


function simpNumb(num){
    for( var i = 2; i <= num-1; i++){
        if (num % i == 0){
            return 'число составное';
        }   
    }
    return 'число простое';
};
console.log(simpNumb(1)); 