// js_task3_05
// Написать функцию, которая принимает объект и создает его копию (новую ссылку) и 
// возвращает скопированный объект


function objCopy(obj){
    var newObj;
    obj = newObj;
    return newObj;
};


var obj = {
    one: 1,
    two: 2,
};
console.log(objCopy(obj))
