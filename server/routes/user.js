const express = require("express");
const router = express.Router();
const controller= require("../controllers/user")


router.get("/", controller.get)
router.post("/", controller.post)
router.patch("/:id", controller.patch)
router.delete("/:id", controller.delete)


module.exports = router