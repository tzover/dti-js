{
    ('use strict');

    console.log('this code is type.js');

    console.log(typeof 'Hello');
    console.log(typeof 10);
    console.log(typeof true);
    console.log(typeof null);
    console.log(typeof undefined);

    console.log(parseInt('5', 10) + 3); // 文字列5を10進数に変換して演算
    console.log(parseInt('www', 10)); // 変換できない場合の結果はNaNとなる(not a number)
}
