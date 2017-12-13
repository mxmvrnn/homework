function myFunction(a) {
    return a*3;
}

  
function makeLogging(f, log) {

    function wrapper(a) {
        log.push(a);
        return f.call(this, a);
        }

    return wrapper;
}


var log = [];
myFunction = makeLogging(myFunction, log);

myFunction(1); // 1
myFunction(5); // 5

for (var i = 0; i < log.length; i++) {
console.log( 'Лог:' + log[i] ); // "Лог:1", затем "Лог:5"
}