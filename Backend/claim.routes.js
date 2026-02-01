const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const { claimDeal, myClaims } = require("../controllers/claim.controller");

router.post("/", auth, claimDeal);
router.get("/my", auth, myClaims);




module.exports = router;
