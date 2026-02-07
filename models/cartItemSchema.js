const mongoose = require('mongoose');
const cartItemSchema = new mongoose.Schema({
    cartitemid: {
        type: Number,
        required: true
    },
    cartid:{
        type:Number,
        required:true
    },
    productid: {
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    status:{
        type:Number,
        default:1
    }
});
module.exports = mongoose.model('cartitem', cartItemSchema);