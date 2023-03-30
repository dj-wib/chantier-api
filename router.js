const router = require("express").Router();

const { getBuildingSites, createBuildingSite, updateBuildingSite, deleteBuildingSite, } = require("./controllers/building_site");

router.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
});

router.get("/buildingsites", getBuildingSites);

//Create a new POST buildingsites route:
router.post("/buildingsites", createBuildingSite);

// Create a new PUT route in router.js-
router.put("/buildingsites/:buildingsiteID", updateBuildingSite);

// Create another route in router.js-
router.delete("/buildingsites/:buildingsiteID", deleteBuildingSite);


module.exports = router;