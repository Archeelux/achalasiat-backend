const express = require("express");
const router = new express.Router();
const User = require("../models/user");

router.get("/users", (req, res) => {
    res.send("HELLO BLED");
});

module.exports = router;
