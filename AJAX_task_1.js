function timer(ms) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {resolve()
        }  , ms);
    });
  }

timer(10000).then(() => console.log("я вывелась через 3 секунды!")); 


// боловсвтво

/* function timer(ms) {    
    var keks = new Promise((resolve, reject) => {
        setTimeout(() => {
            3 < 5 ? resolve() : reject();
            // resolve("result");
          }, ms);
    });
    
    
    keks.then(
        onFulfIled => {console.log("kek")},
        onRejected => {console.log("ne kek")}
     );
}

timer(5000); */