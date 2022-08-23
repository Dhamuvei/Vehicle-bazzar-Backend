
const mongoose = require("mongoose");

const feedback = mongoose.Schema({
    BuyerName:{
    type:String,
    require:true,
  },
  BuyerNumber:{
    type:String,
    require:true,
  },
  Byeremail:{
    type:String,
    require:true,
  },
  SellerId:{
    type:String,
    require:true,
  },
  iptText:{
    type:String,
    require:true,
  }

});

module.exports = mongoose.model("FeedBack", feedback);

