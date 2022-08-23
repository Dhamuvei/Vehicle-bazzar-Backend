const SellerData = require("../Schema/SelleerPostData");


const backendData = {
  async postUserData1(req, res) {
    try {
      const RegData1 = new SellerData({
        RegistrationNumber: req.body.RegistrationNumber,
        BikeBrand: req.body.BikeBrand,
        BikeYear: req.body.BikeYear,
        BikeModel: req.body.BikeModel,
        KillometerDriven: req.body.KillometerDriven,
        OwnerStatus: req.body.OwnerStatus,
        City: req.body.City,
        inputZip: req.body.inputZip,
        state: req.body.state,
        SellinPrice: req.body.SellinPrice,
        MobileNumber: req.body.MobileNumber,
        EmailId: req.body.EmailId,
        YourName: req.body.YourName,
        Latitude: req.body.Latitude,
        Longitude: req.body.Longitude,
        PhotoSelected: req.body.PhotoSelected,
        addres: req.body.addres,
        userId: req.body.userId,
      });
      let user = await RegData1.save();
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json("problem in data sending to DB");
    }
  },
  async getallData(req, res) {
    try {
      const getAllDatas = await SellerData.find();
      res.status(200).json(getAllDatas);
    } catch (err) {
      res.state(404).json("Error from getting user datas");
    }
  },
  async findById(req, res) {
    try {
      const findData = await SellerData.findById(req.params.id);
      res.send(findData);
    } catch (err) {
      res.status(400).json("Error in Find By Id");
    }
  },
  async findByUserId(req, res) {
    try {
      const findUser = await SellerData.findOne({ userId: req.params.userId });
      res.send(findUser);
    } catch (err) {
      res.status(400).json("Error in Find By UserId");
    }
  },
  async deleteUser(req, res) {
    try {
      var delUser = await SellerData.findByIdAndDelete({ _id: req.params.id });
      res.send(delUser);
    } catch (err) {
      res.state(400).json("data have been deleted");
    }
  },
};
module.exports = backendData;
