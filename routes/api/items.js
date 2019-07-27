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

// @route   EDIT api/update/:id
// @desc    Update an Item
// @access  Private
router.put('/:id', auth, (req, res) => {
  Item.findOneAndUpdate(req.params.id)
    .then(item => item.updateOne({ _id: id }, {
      $set: {
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
         skirt_waist: req.body.skirt_waist } }).then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

// router.put('/:id', auth,(req, res) => {
//   Item.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, response) {
//     if (err) {
//       console.log(err);
//     }
//     res.send('Done');

//   });
// });


// router.put('/update/:id', auth, (req, res, next) => {

//    let id = {
//    _id: ObjectID(req.params.id)
//    };
//   Item.findById(req.params.id)
//     .then(item => item.update(        
//     {    email: req.body.email,
//         name: req.body.name,
//         phone: req.body.phone,
//         bust: req.body.bust,
//         underbust: req.body.underbust,
//         hip: req.body.hip,
//         length: req.body.length,
//         waist: req.body.waist,
//         shoulder: req.body.shoulder,
//         sleeve: req.body.sleeve,
//         round_sleeve: req.body.round_sleeve,
//         nip: req.body.nip,
//         stk: req.body.stk,
//         gown_length: req.body.gown_length,
//         skirt_length: req.body.skirt_length,
//         blouse_length: req.body.blouse_length,
//         skirt_waist: req.body.skirt_waist}
//      , (err, result) => {
//         if (err) {
//           throw err;
//         }
//         res.send('user updated sucessfully');
//       }


//     ).then(() => res.json({ success: true })))
//     .catch(err => res.status(404).json({ success: false }));
// });

// app.put('/name/update/:id', (req, res, next) => {
//   let id = {
//     _id: ObjectID(req.params.id)
//   };

//   dbase.collection("name").update({ _id: id }, { $set: { 'first_name': req.body.first_name, 'last_name': req.body.last_name } }, (err, result) => {
//     if (err) {
//       throw err;
//     }
//     res.send('user updated sucessfully');
//   });
// });

module.exports = router;
