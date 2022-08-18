const router = require("express").Router();
const condition = require("../service/SellerCondition");

router.post("/post",condition.postUserData1);
router.get("/get",condition.getallData);
router.get("/:id",condition.findById);
router.get("/userId/:userId",condition.findByUserId)
router.delete("/delete/:id",condition.deleteUser)



module.exports = router;