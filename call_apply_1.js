function sumArgs() {
    arguments.reduce = [].reduce;
    return arguments.reduce(function(a, b) {
      return a + b;
    });
}