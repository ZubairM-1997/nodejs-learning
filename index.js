// const http = require("http")

const express = require("express")
const bodyParser = require("body-parser")

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();

app.use(bodyParser.urlencoded());

app,use(shopRoutes)
app.use(adminRoutes);


//allows us to add a middleware function
// app.use('/',(req, res, next) => {
// 	console.log("This always runs!")
// 	next() //Allows the request to continue to the next middleware in line

// });







// const server = http.createServer(app);

// server.listen(3000)
app.listen(3000)