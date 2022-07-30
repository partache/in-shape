const { getById } = require('../services/item');


module.exports = () => async (req, res, next) => {
    const { itemId } = req.params.id;
    try {
        const item = await getById(itemId).lean();
        item._ownerId = item.owner;
        res.locals.item = item;
        next();
    } catch (err) {
        console.error(err);
        res.status(404).json({ message: 'Record not found' });
    }
};