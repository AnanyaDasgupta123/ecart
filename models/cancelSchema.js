const mongoose = require('mongoose');
const cancelSchema = new mongoose.Schema({
    cartid: {
        type: Number,
        required: true
    },
    userid:{
        type:Number,
        required:true
    },
    remarks:{
        type:String,
        required:true
    },
    canceled_at:{
        type:Date,
        default:Date.now
    }
});
module.exports = mongoose.model('cancel', cancelSchema);