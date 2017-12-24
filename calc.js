function Calculator() {
  this.firstNum = 0;
}

Calculator.prototype.sum = function() {
  for (var i = 0; i < arguments.length; i++) {
    this.firstNum += arguments[i];
  }
};
Calculator.prototype.dif = function() {
  for (var i = 0; i < arguments.length; i++) {
    this.firstNum -= arguments[i];
  }
};

Calculator.prototype.mul = function() {
  for (var i = 0; i < arguments.length; i++) {
    this.firstNum *= arguments[i];
  }
};

Calculator.prototype.div = function() {
  for (var i = 0; i < arguments.length; i++) {
    if (arguments[i] !== 0) {
      this.firstNum /= arguments[i];
    } else {
      console.log('Делить на 0 нельзя!!!');
    }
  }
};

Calculator.prototype.gesResult = function() {
  return this.firstNum;
};

var calculator = new Calculator();

calculator.sum(2, 2, 3);
console.log(calculator.gesResult());
calculator.dif(2);
console.log(calculator.gesResult());
calculator.mul(2);
console.log(calculator.gesResult());
calculator.div(0, 2);
console.log(calculator.gesResult());

function EngineerCalculator(name) {
  Calculator.apply(this, arguments);
  this.name = name;
}
EngineerCalculator.prototype = Object.create(Calculator.prototype);

EngineerCalculator.prototype.constructor = EngineerCalculator;

EngineerCalculator.prototype.gesResult = function() {
  Calculator.prototype.gesResult.apply(this, arguments);
  return this.name + ', ваш результат равен: ' + this.firstNum;
};

EngineerCalculator.prototype.pow = function() {
  for (var i = 0; i < arguments.length; i++) {
    this.firstNum = Math.pow(this.firstNum, arguments[i]);
  }
};

EngineerCalculator.prototype.log = function() {
  this.firstNum = Math.log(this.firstNum);
};

var engineerCalculator = new EngineerCalculator('Вася');

engineerCalculator.sum(2);
console.log(engineerCalculator.gesResult());
engineerCalculator.pow(2, 2);
console.log(engineerCalculator.gesResult());
engineerCalculator.log();
console.log(engineerCalculator.gesResult());