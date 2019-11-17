// const http = require("http")
const path = require("path")
const express = require("express")
const bodyParser = require("body-parser")

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();

app.use(bodyParser.urlencoded());

app.use(shopRoutes)
app.use('/admin' , adminRoutes);


//adding an error 404 page if a path is not found
app.use((req, res, next) => {
	res.status(404).sendFile(path.join(__dirname, "views", "404.html"))
});



//allows us to add a middleware function
// app.use('/',(req, res, next) => {
// 	console.log("This always runs!")
// 	next() //Allows the request to continue to the next middleware in line

// });







// const server = http.createServer(app);

// server.listen(3000)
app.listen(3000)