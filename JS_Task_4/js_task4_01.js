/* Написать функцию, которая удаляет первый или/и последний
пробел с строке и возарщает строку без начального
и завершающего пробела. */


function trimDelete(str){
    return str.trim();
};


var str1 = '  kekmakek';
console.log(trimDelete(str1));