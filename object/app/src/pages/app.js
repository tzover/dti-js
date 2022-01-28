{
    ('use strict');

    const eventNum = 5;
    const winner = Math.floor(Math.random() * eventNum);
    const h1 = document.createElement('h1');
    const hr = document.createElement('hr');
    const main = document.createElement('main');
    main.classList.add('main');

    // h1.textContent = "It's a Treasure Hunt Game";
    h1.innerHTML = 'Where is the treasure box ?';
    document.body.appendChild(h1);
    document.body.appendChild(hr);

    for (let i = 0; i < eventNum; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        // div.textContent = i;

        div.addEventListener('click', () => {
            // div.classList.toggle('circle');
            if (i === winner) {
                div.innerHTML = 'Win!';
                div.classList.add('win');
            } else {
                div.innerHTML = 'Lose!';
                div.classList.add('lose');
            }
        });
        document.body.appendChild(main).appendChild(div);
    }
}
