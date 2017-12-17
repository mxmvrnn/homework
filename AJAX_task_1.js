function timer(ms) {
    var promise = new Promise(function(resolve, reject){

        /* resolve(console.log("Все получилось"));
        reject(console.log("ничего не получилось")); */
        
         return setTimeout(resolve, ms)

        });
}


console.log(timer(10000000));