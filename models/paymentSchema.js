const mongoose = require('mongoose');
const paymentSchema=new mongoose.Schema({
   referenceid: {
        type: Number,
        required: true
    },
    userid:{
        type:Number,
        required:true
    },
    amount:{
        type:Number,
        require:true
    },
    cartid:{
        type:Number,
        require:true
    },
    paymentmethod:{
        type:String,
        enum:['UPI','Card','Cash'],
        required:true
    }
});
module.exports = mongoose.model('payment', paymentSchema);