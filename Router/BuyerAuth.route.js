const router =require("express").Router();

const service = require("../service/BuyerService");


router.post("/register",service.Register);
router.post("/login",service.Login);





module.exports = router;
