const router = require("express").Router();


const condition = require("../service/BuyerMailservice");

router.post("/BuyerMail",condition.buyerMail);

module.exports = router;