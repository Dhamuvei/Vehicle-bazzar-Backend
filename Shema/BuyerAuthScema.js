const mongoose = require("mongoose");
const {Schema} = mongoose

const BuyerSchema = new Schema({

  fname: {
    type: String,
    requried: true,
  },
  lname: {
    type: String,
    requried: true,
  },
  username: {
    type: String,
    requried: true,
  },
  number: {
    type: String,
    requried: true,
  },
  email: {
    type: String,
    requried: true,
  },
  
  password: {
    type: String,
    requried: true,
  },
  cpassword: {
    type: String,
    requried: true,
  },
},{
  collection: 'buyersignup',
  timestamps:true,
  });

module.exports = mongoose.model("BuyerSignUp", BuyerSchema);
