const Item = require('../models/Item');

async function getAll() {
    return Item.find({});
}

async function getmostPopular(category) {

    const latest3 = await Item.find({ category: { $in: [category]}}).populate('reviews')
        .sort({ "reviews.rating": -1 })
        .limit(3)

    return latest3;
}

async function create(item) {
    const result = new Item(item);
    await result.save();

    return result;
}

function getById(id) {
    return Item.findById(id).populate('reviews');
}

async function update(id, item) {
    const existing = await Item.findById(id);

    existing.category = item.category;
    existing.subCategory = item.subCategory;
    existing.size = item.size;
    existing.description = item.description;
    existing.price = item.price;
    existing.img = item.img;
    existing.title = item.title;

    await existing.save();

    return existing;
}

async function deleteById(id) {
    await Item.findByIdAndDelete(id);
}

async function searchItem(query) {
    const options = {};

    if (query.search) {
        options.type = new RegExp(query.search, 'i');
    }

    return await Item.find(options).lean();
}



module.exports = {
    getAll,
    create,
    getById,
    update,
    deleteById,
    searchItem,
    getmostPopular,
};