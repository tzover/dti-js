{
    ('use strict');

    console.log('this code is ifelse.js');

    const score = 40;

    if (score >= 80) {
        console.log('Great');
    } else {
        console.log('No Good');
    }

    // 3項演算子を使うとcodeを短く書ける！
    score >= 80 ? console.log('Great') : console.log('No Good');
}
