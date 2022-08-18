const router =require("express").Router();

const service = require("../service/SellerService");


router.post("/register",service.Register);
router.post("/login",service.Login);





module.exports = router;
