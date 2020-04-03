import Parent from './Parent';
import FunParent from './FunParent';

const a = require('./a-module');
console.log(a);

const p = new Parent();
const fp = new FunParent();

console.log(p);
for (let a in p) {
    console.log(a);
}

console.log(fp);
for (let a in fp) {
    console.log(a);
}