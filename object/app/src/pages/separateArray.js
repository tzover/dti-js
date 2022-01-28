'use strict';

{
    // 分割代入
    console.log('this code is separateArray.js');

    const scores = [80, 90, 40, 70];
    const otherscores = [1, 2, 3, 4];
    const [a, b, c, d] = scores;

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);

    const [e, f, ...etc] = scores;
    console.log(e);
    console.log(f);
    console.log(etc);

    // 配列の操作
    scores.push(89, 50, 30); // 末尾に要素を追加
    scores.pop(); // 先頭の要素を削除
    scores.splice(2, 0, 99, 99, 99); //(変化させる位置, 削除する要素数, 追加する要素)

    // for展開
    for (let i = 0; i < scores.length; i++) {
        console.log(`score ${i}: ${scores[i]}`);
    }

    const superScores = [...scores, ...otherscores];

    // map展開
    superScores.map((score, idx) => console.log(`${idx + 1}番目は${score}です。`));
    // console.log(
    //     superScores.map((score, idx) => {
    //         return `${idx + 1}番目は${score}です。`;
    //     })
    // );

    // forEach展開
    scores.forEach((score, idx) => {
        console.log(`score ${idx}: ${score}`);
    });

    // filter 条件に合う要素の取り出し
    const evenNum = superScores.filter((num) => num % 2 === 0);
    console.log(evenNum);
}
