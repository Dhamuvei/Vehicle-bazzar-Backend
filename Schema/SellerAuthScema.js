const mongoose = require("mongoose");


const Registerschema = mongoose.Schema({
  username: {
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
});

module.exports = mongoose.model("RegisterdSeller", Registerschema);
