const router = require("express").Router();
const { getAllDeals, getDeal,createDeal } = require("../controllers/deal.controller");

router.get("/", getAllDeals);
router.get("/:id", getDeal);
router.post("/", createDeal);

module.exports = router;
