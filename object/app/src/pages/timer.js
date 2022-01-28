'use strict';

{
    console.log('this code is timer.js');

    let i = 0;

    const showTime1 = () => {
        console.log('Timer1');
        console.log(new Date());
        i++;
        if (i > 2) {
            clearInterval(intervalId);
        }
    };

    const intervalId = setInterval(showTime1, 1000);

    const showTime2 = () => {
        console.log('Timer2');
        console.log(new Date());
    };

    setTimeout(showTime2, 1000);

    const showTime3 = () => {
        console.log('Timer3');
        console.log(new Date());
        const timeoutId = setTimeout(showTime3, 1000);
        i++;
        if (i > 5) {
            clearTimeout(timeoutId);
        }
    };
    showTime3();
}
