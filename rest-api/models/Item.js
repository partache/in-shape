const { model, Schema, Types: { ObjectId } } = require('mongoose');

const schema = new Schema({
    category: { type : String,
         required: true,
        enum: ['clothing', 'supplements', 'food'] },
    subCategory: {
        type: String,
        required: true,
        minlength: [3, 'Subcategory must be at least 3 characters long']
    },
    size: {
        type: String,
        required: true,
        minlength: [1, 'Size must be at least 1 characters long']
    },
    description: { type: String, required: true, minlength: [10, 'Description must be at least 10 characters long'] },
    price: { type: Number, required: true },
    img: { type: String, required: true },
    title: { type: String,  required: true, minlength: [3, 'Title must be at least 3 characters long']},
    owner: { type: ObjectId, ref: 'User' },
    reviews: {
        type: [ObjectId],
        ref: 'Review', 
        default: []
    }
});

const Item = model('Item', schema);

module.exports = Item;