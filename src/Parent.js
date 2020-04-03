class Parent extends Object {
    constructor() {
        super();
        console.log(123);
    }

}

Parent.prototype.funC = function() {
    console.log('funC');
}

export default Parent;
