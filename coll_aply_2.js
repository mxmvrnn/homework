function argsCount() {
    for(var i = 0 ; i < arguments.length; i++){
        
    } return "В вашей функции целых " + i + " аргументов"
}
argsCount('a','b')


function applyAll(func) {
    return func.apply(this, [].slice.call(arguments, 1));
}

console.log(applyAll(argsCount, 1, 2 ,4 ))
