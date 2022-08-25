
const mongoose = require("mongoose");

const UserData1 = mongoose.Schema({
  RegistrationNumber: {
    type: String,
    requried: true,
  },
  BikeBrand: {
    type: String,
    requried: true,
  },
  BikeYear: {
    type: String,
    requried: true,
  },
  BikeModel: {
    type: String,
    requried: true,
  },
  KillometerDriven: {
    type: String,
    requried: true,
  },
  OwnerStatus: {
    type: String,
    requried: true,
  },
  City: {
    type: String,
    requried: true,
  },
  inputZip: {
    type: String,
    requried: true,
  },
  state: {
    type: String,
    requried: true,
  },
  SellinPrice: {
    type: String,
    requried: true,
  },
  MobileNumber: {
    type: String,
    requried: true,
  },
  EmailId: {
    type: String,
    requried: true,
  },
  YourName: {
    type: String,
    requried: true,
  },
  Latitude: {
    type: String,
    requried: true,
  },
  Longitude: {
    type: String,
    requried: true,
  },
  PhotoSelected: {
    type: Array,
    required: true,
  },
  addres:{
    type:String,
    require: true,
  },
  userId:{
    type:String,
    require:true,
  },
});

module.exports = mongoose.model("SellerData", UserData1);

