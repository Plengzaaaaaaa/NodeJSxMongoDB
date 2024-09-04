const mongoose = require("mongoose");
const ordersSchema = new mongoose.Schema({
    customer_name:{type:String,require:true},
    product:{type:String,require:true},
    quantity:{type:Number,require:true},
    order_date:{type:String,require:true},
    status:{type:String,require:true},
},
    {timestamps:true,versionKey:false});

module.exports = mongoose.model('Orders',ordersSchema);
// Define Schame wit timestamps and disable versionKey

// Define Model

// Export Model