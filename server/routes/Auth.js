const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController")


router.get("/", AuthController.get)
router.post("/", AuthController.post)
router.patch("/:id", AuthController.patch)
router.delete("/:id", AuthController.delete)


module.exports = router