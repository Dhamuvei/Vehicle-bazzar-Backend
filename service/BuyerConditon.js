const BuyerSignUp = require("../Schema/BuyerAuthScema");

const Buyerdata={

    async getallData(req, res) {
        try {
          const getAllDatas = await BuyerSignUp.find()
          res.status(200).json(getAllDatas);
        } catch (err) {
          res.state(404).json("Error from getting Buyer datas");
        }
      },
      async getById(req,res){
        try {
          const findById = await BuyerSignUp.findById(req.params.id);
          res.send(findById);
        } catch (err) {
          res.status(400).json("Error in Buyer Find By Id");
        }
      }
}

module.exports =Buyerdata;