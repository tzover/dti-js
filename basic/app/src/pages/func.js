{
    ('use strict');

    console.log('this code is func.js');

    // function は アロー関数で書く

    const showAd = (message = 'none') => {
        // 引数が渡ってこなければ初期値noneとなる

        console.log('---------');
        console.log(`---${message}---`);
        console.log('---------');
    };

    showAd('Header Ad');
    console.log('wwwwwwwww');
    console.log('Great');
    showAd('Ad');
    console.log('wwwwwwwww');
    console.log('Great');
    showAd('Footer Ad');
    console.log('wwwwwwwww');
    console.log('Great');
    showAd();

    const sum = (a, b, c) => a + b + c; // return を省略して1行で書ける

    const total = sum(1, 2, 3) + sum(4, 5, 6);
    console.log(`totalは${total}です`);
}
