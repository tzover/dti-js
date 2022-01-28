'use strict';

{
    console.log('this code is object.js');

    const otherProps = {
        r: 4,
        color: 'red',
    };
    const point = {
        x: 100,
        y: 200,
        ...otherProps,
    };
    console.log(point);
    // objectは再代入できる
    point.x = 150;
    console.log(point.x);

    // 分割代入
    const { x, r, ...others } = point;
    console.log(x);
    console.log(r);
    console.log(others);

    // keyの取り出し
    const keys = Object.keys(point);
    keys.map((key) => {
        console.log(`key : ${key}`);
    });

    // 複雑なobjectの値の取り出し
    const nums = [
        { favorite: 1, bad: 4 },
        { favorite: 10, bad: 99 },
        { favorite: 7, bad: 3 },
    ];

    console.log(nums[1].bad);
}
