const express = require("express")
const router = express.Router();

const vegetables = ["Carrot","Brinjal","Cabbage"]

router.get("/", (req,res) => {
    res.send(vegetables)
})

module.exports = router