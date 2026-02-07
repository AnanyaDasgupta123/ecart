const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
    categoryid: {
        type: Number,
        required: true
    },
    categoryname: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model('category', categorySchema);