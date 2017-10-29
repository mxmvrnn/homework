// js_task3_03
// Написать функцию, которая принимает строку и объект,
// а затем проверяет есть ли у переданного объекта свойство с данным именем.
// Функция должна возвращать true или false


function checkAnObj(obj,str){
    if (str in obj){
        console.log('Объект содержит свойство с данным именем');
    } else {
        console.log('Объект не содержит свойств с данным именем');
    }
}
var obj = {
    kekmakek : 'pamparam',
},
str = 'kekmakek1';
console.log(checkAnObj(obj,str));
// console.log(obj);