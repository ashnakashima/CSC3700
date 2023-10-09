const products = [];

// the work of saving data
module.exports = class Product {
    constructor(t, a, p) {
        this.title = t;
        this.author = a;
        this.price = p;
    }
    save() {
        // this refers to the current object being made
        products.push(this);
    }
    static fetchALl(){
        return products;
    }
}