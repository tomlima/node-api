const express = require("express");
const router = express.Router()
const user = require("../controllers/user.controller")

router.get("/", user.getUsers)
router.post("/", user.insertUser)
router.delete("/:id", user.deleteUser)
router.put("/:id", user.updateUser)

module.exports = router
