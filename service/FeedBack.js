const FeedBack = require("../Schema/sellerFeedBack");

const feedBackCollection = {
  async feedPost(req, res) {
    try {
      const feedData = new FeedBack({
        BuyerName: req.body.BuyerName,
        BuyerNumber: req.body.BuyerNumber,
        Byeremail: req.body.Byeremail,
        SellerId: req.body.SellerId,
        iptText:req.body.iptText,
      });
      let user = await feedData.save();
      res.status(200).json(user);
    } catch (err) {
      res.status(400).json("problem in feedback sending to DB");
    }
  },
  //Feedback Get by Id
  async findFeedbackById(req, res) {
    try {
      const findUser = await FeedBack.find({ SellerId: req.params.id });
      res.send(findUser);
    } catch (err) {
      res.status(400).json("Error in Find By UserId");
    }
  },
  //delete feedback by id
  async deletefeedback(req, res) {
    try {
      var delUser = await FeedBack.findByIdAndDelete({ _id: req.params.id });
      res.send(delUser);
    } catch (err) {
     
    }
  },

};
module.exports = feedBackCollection;
