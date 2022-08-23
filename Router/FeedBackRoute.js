const router = require("express").Router();
const condition = require("../service/FeedBack")

router.post("/post",condition.feedPost);
router.get("/feedback/:id",condition.findFeedbackById);
router.delete("/deletefeedback/:id",condition.deletefeedback);


module.exports = router;