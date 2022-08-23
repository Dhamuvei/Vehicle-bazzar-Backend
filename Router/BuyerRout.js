const router = require("express").Router();
const condition = require("../service/BuyerConditon")


//GEt Data from buyer registration
router.get("/get",condition.getallData);
router.get("/getById/:id",condition.getById)



module.exports = router;