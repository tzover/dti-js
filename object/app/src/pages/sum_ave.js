'use strict';

{
    console.log('this code is sum_ave.js');

    const scores = [20, 63, 79, 67, 31, 90];
    let sum = 0;

    scores.map((score) => {
        sum += score;
    });

    const ave = sum / scores.length;

    console.log(ave);
    console.log(Math.floor(ave));
    console.log(Math.ceil(ave));
    console.log(Math.round(ave));
    console.log(ave.toFixed(3));

    console.log(Math.random() * 10);
    console.log(Math.floor(Math.random() * 10));
    console.log(Math.floor(Math.random() * 6) + 1); // 0を使いたくないとき
}
