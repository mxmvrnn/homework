function timer(ms) {
    var promire = new Promise(function(resolve, reject){

            resolve(console.log("Все получилось"));
            reject(console.log("ничего не получилось"));
            
            setTimeout(resolve, ms)

        });
}
