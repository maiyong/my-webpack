class Parent extends Object {
    constructor() {
        super();
        console.log(123);
    }

    toNs() {
        console.log('toNa');
    }

}

Parent.prototype.funC = function() {
    console.log('funC');
};

export default Parent;
