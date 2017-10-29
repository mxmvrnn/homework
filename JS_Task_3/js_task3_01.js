// js_task3_01
// Создать пустой объект. Добавить несколько свойств со значениями разных типов.
// Удалить одно из созданных свойств.


var user = {

};
user.name = "Иван";
user.lastName = "Сусуанин";
user.age = '10';
user.test = true;
delete user.test;
console.log(user);
console.log(user.name);
