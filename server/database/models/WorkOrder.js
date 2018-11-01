const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise

// Define userSchema
const orderSchema = new Schema({

    username: { type: String, unique: false, required: false },
    password: { type: String, unique: false, required: false },

    location: {
        type: String,
    },
    aptNumber: {
        type: String,
    },
    workType: {
        type: String,
    },
    priority: {
        type: String,
    },
    address: {
        type: String,
    },
    city: { type: String },
    zipCode: { type: String },
    aptNumber: { type: String },
    typeSelect: { type: String },
    typeDescription: { type: String }

})




const WorkOrder = mongoose.model('WorkOrder', orderSchema);
module.exports = WorkOrder;