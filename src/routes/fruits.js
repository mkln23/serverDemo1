const express = require("express")
const router = express.Router();

const fruits = ["Apple","Orange","Tomato"]

router.get("/", (req,res) => {
    res.send(fruits)
})

module.exports = router