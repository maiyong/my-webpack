import './index.css';
import './index.less';
import img from '../res/fail.png';

import a from './a-module';
console.log(a);
window.name = "123";

const sum = function(a, b) {
    return this.name + a + b;
};

new Promise((resolve, reject) => {
    resolve(1);
}).then((v) => {
    console.log(v);
});



console.log(sum.call(window, 1, 2));

document.getElementById('img').src = img;