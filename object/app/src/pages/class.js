'use strict';

{
    class Post {
        constructor(text) {
            this.text = text;
            this.likeCount = 0;
        }
        show() {
            console.log(`${this.text} - ${this.likeCount}`);
            const h1 = document.createElement('h1');
            h1.innerHTML = `${this.text} - ${this.likeCount} likes`;
            document.body.appendChild(h1);
        }

        like() {
            this.likeCount++;
            this.show();
        }
    }

    class Sponsor extends Post {
        constructor(text, sponsor) {
            super(text);
            this.sponsor = sponsor;
        }

        show() {
            super.show();
            const h2 = document.createElement('h2');
            h2.innerHTML = `... sponsored by ${this.sponsor}`;
            document.body.appendChild(h2);
        }
    }
    console.log('this code is class.js');

    const posts = [
        new Post('study English'),
        new Post('study Math'),
        new Sponsor('3333333', 'nike'),
        // {
        //     text: 'study English',
        //     likeCount: 0,
        // },
        // {
        //     text: 'study Math',
        //     likeCount: 0,
        //     showMethod() {
        //         console.log(`${this.text} - ${this.likeCount}`);
        //         const h1 = document.createElement('h1');
        //         h1.innerHTML = `${this.text} - ${this.likeCount}`;
        //         document.body.appendChild(h1);
        //     },
        // },
    ];

    // posts.map((post) => post.show());
    posts.map((post) => post.like());
}
