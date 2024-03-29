const router = require('express').Router();
const api = require('../services/item');
const { isAuth, isOwner } = require('../middlewares/guards');
const mapErrors = require('../utils/mapper');
const preload = require('../middlewares/preload');


router.get('/', async (req, res) => {
    const data = await api.getAll();
    res.json(data);
});

router.get('/my-items', isAuth(), async (req, res) => {
    const data = await api.getMyItems(req.user._id);
    res.json(data);
});

router.get('/popular/:category', async (req, res) => {
    const category = req.params.id;
    
    try {
        const latest = await api.getmostPopular(category);
        res.status(200).json(latest);
    } catch (err) {
        console.error(err);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.post('/', isAuth(), async (req, res) => {
    const item = {
        category: req.body.category,
        subCategory: req.body.subCategory,
        size: req.body.size,
        description: req.body.description,
        price: req.body.price,
        img: req.body.img,
        title: req.body.title,
        owner: req.user._id
    };

    try {
        const result = await api.create(item);
        res.status(201).json(result);
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.get('/:id', preload(), (req, res) => {
    const item = res.locals.item;
    res.json(item);
});

router.put('/:id', preload(), isOwner(), async (req, res) => {
    const itemId = req.params.id;
    const item = {
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        description: req.body.description,
        price: req.body.price,
        img: req.body.img,
        material: req.body.material
    };

    try {
        const result = await api.update(itemId, item);
        res.json(result);
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

router.delete('/:id', preload(), isOwner(), async (req, res) => {
    try {
        const itemId = req.params.id;
        await api.deleteById(itemId);
        res.status(204).end();
    } catch (err) {
        console.error(err.message);
        const error = mapErrors(err);
        res.status(400).json({ message: error });
    }
});

module.exports = router;