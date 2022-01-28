'use strict';

{
    console.log('this code is alert_comfirm.js');
    alert('Hello');

    const answer = confirm('remove?');

    if (answer) {
        console.log('removed');
    } else {
        console.log('canseled');
    }
}
