// js_task3_04         
// Написать функцию, которая принимает строку и объект, 
// проверяет есть ли у переданного объекта свойство с данным именем, 
// если такое свойство отсутствует, до добавляет его и устанавливает значение ‘new’. 
// Функция должна возвращать исходный или модифицированный объект.


function checkObj(obj,str){
    if (str in obj){
        return obj;
    } else {
        obj.src = 'new';
    }   return obj;
};

var obj ={
    kekmakek : 'parampam',
},
str = 'kekmakek';
console.log(checkObj(obj,str));