function sum(a) {
    
    var currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }
    
    f.toString = function() {
        return currentSum;
    };
    
        return f;
}

    console.log(sum(5)(2)(4));