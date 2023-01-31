const router = require("express").Router();

const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");

// Create a route for the controller
router.route("/").get(bootcamps.getBootcamps);

// Export the router
module.exports = router;
