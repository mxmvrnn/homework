function calculator(firstNamber){ 
    return { 
    sum : function sum(){ 
        var resultSum = firstNamber; 
        for (var i = 0; i < arguments.length ; i++ ){ 
            resultSum += arguments[i]; 
        } 
                return resultSum; 
        },
    dif : function dif(){ 
        var resultDif = firstNamber; 
        for (var i = 0; i < arguments.length ; i++ ){ 
            resultDif -= arguments[i]; 
        } 
                return resultDif; 
        },
    div : function div(){ 
        var resultDiv = firstNamber; 
        for (var i = 0; i < arguments.length ; i++ ){ 
            resultDiv /= arguments[i]; 
        } 
                return resultDiv; 
        },
    mul : function mul(){ 
        var resultMul = firstNamber; 
        for (var i = 0; i < arguments.length ; i++ ){ 
            resultMul *= arguments[i]; 
        } 
                return resultMul; 
        }
    } 
} 
    
var calc = calculator(256); 
    
console.log(calc.sum(2,2,2,2,2,2,2,2,2,2,2));
console.log(calc.dif(2,2,2));
console.log(calc.div(2,2,2));
console.log(calc.mul(2,2,2));

