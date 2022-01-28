'use strict';

{
    console.log('this code is string.js');

    const str = 'gashuin';

    console.log(str.length);
    console.log(str[1]);
    console.log(str.substring(1, 4)); // ash

    // join
    const gashu = ['gashuin', 'shoei', 'saikyo'];
    console.log(gashu.join('/'));

    // split
    const t = '17:00:15';
    console.log(t.split(':'));
    const [hour, minute, second] = t.split(':');
    console.log(hour);
    console.log(minute);
    console.log(second);
}
