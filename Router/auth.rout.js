const router =require("express").Router();

const service = require("../service/auth.services");


router.post("/register",service.Register);
router.post("/login",service.Login);





module.exports = router;
