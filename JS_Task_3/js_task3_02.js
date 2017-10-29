// js_task3_02
// Написать, функцию, которая принимает в качестве аргумента объект
// и выводит в консоль все ключи и значения свойств. 
// Данная функция не должна возвращать значение.


function messageObj(obj){
    console.log(obj);
}
var user = {
    
    };
    user.name = "Иван";
    user.lastName = "Сусуанин";
    user.age = '10';
    user.test = true;
console.log(messageObj(user));