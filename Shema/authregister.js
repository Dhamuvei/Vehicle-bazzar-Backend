const mongoose = require("mongoose");

var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email)
}
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
  // ConfirmPassword: {
  //   type: String,
  //   requried: true,
  // },
});

module.exports = mongoose.model("RegisterdUsers", Registerschema);
