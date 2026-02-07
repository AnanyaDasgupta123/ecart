const mongoose = require('mongoose');
const cartSchema = new mongoose.Schema({
    cartid: {
        type: Number,
        required: true
    },
    userid:{
        type:Number,
        required:true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('cart', cartSchema);