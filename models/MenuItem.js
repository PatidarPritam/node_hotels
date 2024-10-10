const mongoose = require('mongoose');


const menuItemsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste:{
         type:String,
         enum: ['sweet','spicy','sour'],
         required: true
    } ,
    is_drink:{
        type: Boolean,
        default: false

    },
    ingredients:{
        type:[String],
        defaults:[]
     },
     num_sales:{
        type: Number,
        default: 0
     },
    category: {
        type: String,
        enum: ['breakfast', 'lunch', 'dinner','dessert'],
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // it is add later
    test:{
        type:String

    }
})

const menuItem = mongoose.model('MenuItem',menuItemsSchema);

module.exports = menuItem;