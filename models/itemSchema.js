const mongoose = require('mongoose');
const itemSchema = new mongoose.Schema({
    productid: {
        type: Number,
        required: true
    },
    productname: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    categoryid: {
        type: Number,
        required: true
    },
})
module.exports = mongoose.model('item', itemSchema);