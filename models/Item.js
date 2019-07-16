const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  }, 
  email: {
    type: String,
    required: true
  },
  bust: {
    type: Number,
    required: false
  },
  underbust: {
    type: Number,
    required: false
  }, 
  hip: {
    type: Number,
    required: false
  }, 
  length: {
    type: Number,
    required: false
  }, 
  waist: {
    type: Number,
    required: false
  }, 
  sleeve: {
    type: Number,
    required: false
  }, 
  round_sleeve: {
    type: Number,
    required: false
  }, 
  nip: {
    type: Number,
    required: false
  }, 
  shoulder: {
    type: Number,
    required: false
  },
  stk: {
    type: Number,
    required: false
  },
  phone: {
    type: Number,
    required: true
  },
  gown_length: {
    type: Number,
    required: false
  },
   skirt_length:{
    type: Number,
    required: false
  },
   blouse_length: {
    type: Number,
    required: false
  },
   skirt_waist: {
    type: Number,
    required: false
  },
   date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Item = mongoose.model('item', ItemSchema);
