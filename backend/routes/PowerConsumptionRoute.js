const { Router } = require("express");
const {
  getPowerConsumption,
  getPowerConsumptionForSpecificApp,
} = require("../controllers/PowerConsumptionController");

const router = Router();

router.get("/allprocesses", getPowerConsumption);
router.post("/specificprocess", getPowerConsumptionForSpecificApp);

module.exports = router;
