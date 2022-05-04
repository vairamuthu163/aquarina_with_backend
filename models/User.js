const mongoose = require('mongoose');

const TicSchema = mongoose.Schema({
    date:{
        type:String,
        required:false, 
    },
    members:{
        type:Number,
        required:false
    }
});
const OrderSchema = mongoose.Schema({
    email:{type:String,required:false},
    user_name:{
        type:String,
        required:false,
    },
    contactno:{
        type:String,
        required:false
    },
    address:{
        type:String,
        required:false
    },
    country:{
        type:String,
        required:false
    },
    state:{
        type:String,
        required:false
    }, 
    product_img:{
        type:String,
        required:false
    },
    count:{
        type:Number,
        required:false
    },
    product_name:{
        type:String,
        required:false
    },
    price:{
        type:String,
        required:false
    },
    date:{
        type:String,
        required:false
    }
})
const CartSchema = mongoose.Schema({
    product_id:{
        type:String,
        required:false, 
    },
    product_name:{
        type:String,
        required:false
    },
    product_img:{
        type:String,
        required:false
    },
    price:{
        type:Number,
        required:false
    },
    category:{
        type:String,
        required:false, 
    },
    count:{
        type:Number,
        return:true
    }
})
const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    cart:[CartSchema],
    ticket:[TicSchema],
    orders:[OrderSchema]
})

module.exports = mongoose.model("users",UserSchema);