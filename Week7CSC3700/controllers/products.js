const adminData = require("../routes/admin");
// let products = [];
const Product = require('../models/product');
exports.getAddProduct = (req, res, next) => {
    res.render( 'addProduct',
        {
            from: 'addProduct'
        })
}

exports.postAddProduct = (req, res, next) => {
    // console.log( req );
    console.log("----flag")
    let t = req.body.title;
    let a = req.body.author;
    let p = req.body.price;
    // products.push( {
    //     title: t,
    //     author: a,
    //     price: p
    // });
    const product = new Product(t, a, p);
    product.save();
    res.redirect('/add-product')
    // res.send(`Made it to post title:${t}`);
}
exports.getProducts = (req, res, next) => {
    const products = Product.fetchALl();
    res.render( 'showProducts', {
        title: "Show Available Products",
        from: 'showProducts',
        products : products
    });
}
