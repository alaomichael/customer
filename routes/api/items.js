const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Item Model
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
  Item.find()
    .sort({ date: -1 })
    .then(items => res.json(items));
});

// @route   POST api/items
// @desc    Create An Item
// @access  Private
router.post('/', auth, (req, res) => {
  const newItem = new Item({
    email: req.body.email,
    name: req.body.name,
    phone: req.body.phone,
    bust: req.body.bust,
    underbust: req.body.underbust, 
    hip: req.body.hip, 
    length: req.body.length, 
    waist: req.body.waist, 
    shoulder: req.body.shoulder, 
    sleeve: req.body.sleeve, 
    round_sleeve: req.body.round_sleeve, 
    nip: req.body.nip, 
    stk: req.body.stk, 
    gown_length: req.body.gown_length, 
    skirt_length: req.body.skirt_length, 
    blouse_length: req.body.blouse_length, 
    skirt_waist: req.body.skirt_waist
  });

  newItem.save().then(item => res.json(item));
});

// @route   DELETE api/items/:id
// @desc    Delete A Item
// @access  Private
router.delete('/:id', auth, (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
