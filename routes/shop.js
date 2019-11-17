const express = require("express")
const path = require('path')

const router = express.Router();


router.get("/", (req, res, next) => {
	console.log("In another middleware")
	//path.join automatically detects the OS you are running and constructs the route you require
	res.sendFile(path.join(__dirname, "../", "views", "shop.html"))
})

module.exports = router;