const router = require('express').Router({ mergeParams: true});
const api = require('../services/review');
const { isAuth, isOwner } = require('../middlewares/guards');
const mapErrors = require('../utils/mapper');
const preload = require('../middlewares/preload');

router.post('/', isAuth(), preload(), async (req, res) => {
    const item = res.locals.item;
//'/items/:itemId/reviews', '/items/:itemId/reviews/:reviewId'
    const review = {
        rating: req.body.rating,
        date: req.body.date,
        description: req.body.description,
        owner: req.user._id,
        item: item
    };

    try{
        const result = await api.create( review, item._id);
        res.status(201).json(result);
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.get('/', preload(), async (req, res) => {
    const item = res.locals.item;
    const review = await api.getAllReviewsByItemId(item._id);
    res.json(review);
});

router.delete('/:reviewId', isOwner(), preload(), async (req, res) => {
    const item = res.locals.item;
    try{
        const review = await api.deleteById(req.params.reviewId, item._id);
        res.status(204).end();
    }catch(err){
        console.error(err);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

module.exports = router;