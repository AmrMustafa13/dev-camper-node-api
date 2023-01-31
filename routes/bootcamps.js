const express = require("express");
const router = express.Router();

const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
} = require("../controllers/bootcamps");

// Create a route for the controller
router.get("/", getBootcamps).post("/", createBootcamp);

router
  .get("/:id", getBootcamp)
  .put("/:id", updateBootcamp)
  .delete("/:id", deleteBootcamp);

// Export the router
module.exports = router;
