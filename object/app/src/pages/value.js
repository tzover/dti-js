'use strict';

{
    console.log('this code is value.js');

    let x = 3;
    let y = x;

    x = 10;

    console.log(`x=${x}, y=${y}`);

    let a = [5, 3];
    let b = a;

    a[0] = 10;

    console.log(`a=${a}, b=${b}`);

    b = [...a]; //spread
    a[0] = 100;

    console.log(`a=${a}, b=${b}`);
}
