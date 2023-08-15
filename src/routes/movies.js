const express = require("express")
const router = express.Router();

const movieList = ["24","Maya","Game Over"]

router.get("/", (req,res) => {
    res.send(movieList)
})

module.exports = router