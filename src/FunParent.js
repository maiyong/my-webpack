import Parent from './Parent';

function FunParent() {
    console.log('fun');
    this.s = function() {
        console.log(123);
    };

    new Parent().toNs();
}

FunParent.prototype.fun = function() {
    console.log('fun');
};

export default FunParent;
