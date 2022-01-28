'use strict';

{
    console.log('this code is timedate.js');

    const d1 = new Date();

    console.log(`${d1.getMonth() + 1} 月 ${d1.getDate()} 日`);

    // getFullYear(); → 2021
    // getMonth(); → 0 - 11 (Jan:0, Feb:1, ...)
    // getDate();  → 1 - 31
    // getDay();   → 0 - 6  (Sun:0, Mon:1, ...)

    // getHours(); → 0 - 23
    // getMinutes(); → 0 - 59
    // getSeconds(); → 0 - 59
    // getMilliseconds(); → 0 - 999  1ms = 1/1000 sec

    const d2 = new Date(2021, 1);
    d2.setHours(14, 44, 30);
    console.log(d2);
    d2.setDate(31); // 31日後
    d2.setDate(d2.getDate() + 3); // 3日後
    console.log(d2);
}
