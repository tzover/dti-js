'use strict';
{
    const fileLoad = () => {
        const hr = document.createElement('hr');
        const p = document.createElement('p');
        p.innerHTML = `this code is getElement.js`;
        document.body.appendChild(hr);
        document.body.appendChild(p);
        app();
        updateTextTitle();
    };

    const textTitle = '3秒後にTextが変わります。';
    let changeTitle;
    let bool;

    const app = () => {
        const h3 = document.createElement('h3');
        h3.innerHTML = textTitle;
        document.body.appendChild(h3);
    };

    const updateTextTitle = () => {
        bool = !bool;
        changeTitle = bool ? textTitle : 'false';
        return (document.querySelector('h3').innerHTML = changeTitle);
    };

    setTimeout(updateTextTitle, 3000);

    fileLoad();
}
