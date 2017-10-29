/* Написать функцию, которая складывает два числа и результат округляется 
до 3го знака после запятой. 
Возвращаемый результат должен быть числом */

function precisionNum(num1,num2){
    var summ = num1 + num2;
    console.log(summ.toPrecision(5));
    
};
precisionNum(3.123123,13.123134);