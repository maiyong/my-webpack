function FunParent() {
    console.log('fun');
    this.s = function() {
        console.log(123);
    };
}

FunParent.prototype.fun = function() {
    console.log('fun');
}

export default FunParent;
