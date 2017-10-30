/* Написать функцию, которая возвращает целое случайное число в диапазоне от min до max */

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  };

  console.log(getRandomArbitrary(50,100));
