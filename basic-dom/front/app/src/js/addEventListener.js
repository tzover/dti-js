'use strict';
{
    const btn = document.getElementById('btn');
    let btnText;
    let bool;

    const fileLoad = () => {
        const hr = document.createElement('hr');
        const p = document.createElement('p');
        p.innerHTML = `this code is addEventListener.js`;
        p.innerHTML += '<br>';
        p.innerHTML += 'push Button';
        document.body.appendChild(hr);
        document.body.appendChild(p);
    };
    fileLoad();

    document.getElementById('btn').addEventListener('click', () => {
        updateButtonText();
        btn.classList.toggle('btn');
    });

    const updateButtonText = () => {
        bool = !bool;
        btnText = bool ? 'red' : 'none';
        return (btn.innerHTML = btnText);
    };
}
