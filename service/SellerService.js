const RegisterdSeller = require("../Shema/SellerAuthScema");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



const Sellerservices = {
  async Register(req, res) {
    try {
      var emailExist = await RegisterdSeller.findOne({ email: req.body.email });
      if (emailExist) {
        return res.status(400).json("Email already Exist da dhamuuuuuu...");
      }
      //password HASH
      var hash = await bcrypt.hash(req.body.password, 10);
      const RegData = new RegisterdSeller({
        username: req.body.username,
        email: req.body.email,
        password: hash,
        cpassword: hash,
      });
      let Reguser = await RegData.save();
      res.status(200).json({message:"user sign-up successfully",Reguser});
    } catch (err) {
      res
        .status(400)
        .json("problem in register's data sending");
    }
  },

  async Login(req, res) {
    try {
      var userdata = await RegisterdSeller.findOne({ email: req.body.email });
      if (!userdata) {
        return res
          .status(400)
          .json("Email (kadal laye illayam...) sethapayaley..");
      }
      var validPsw = await bcrypt.compare(req.body.password, userdata.password);
      if (!validPsw) {
        return res.status(400).json("password not valid brooooo");
        
      }
      var userToken = jwt.sign(
        { email: userdata.email,_id:userdata._id },
        process.env.SECRETKEY,{expiresIn:"10h"}
      );
      res.send(userToken)
    } catch (err) {
      res.status(400).send({error:error.message});
    }
  },
};

module.exports = Sellerservices;
