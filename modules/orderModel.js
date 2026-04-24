const mongoose=require('mongoose');
const orderSchema = new mongoose.Schema({
    cartItems: Array,
    amount: String,
    status: String,
    createAt: {type:Date,default:Date.now}
})

const orderModel=mongoose.model('order',orderSchema);

module.exports=orderModel;