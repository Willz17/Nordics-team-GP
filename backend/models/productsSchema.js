const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const productsSchema = new Schema({
    product: {type:String, required:true},
    price: {type:String, required:true},
    coordinates: { 
        x: {type:String},
        y: {type:String}
    }
});

const ProductsSchema = mongoose.model('products', productSchema, 'products');
module.exports = ProductsSchema;