function FunParent() {
    console.log('fun');
}

FunParent.prototype.fun = function() {
    console.log('fun');
}

export default FunParent;
