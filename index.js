const http = require("http")

const express = require("express")

const app = express();


//allows us to add a middleware function
app.use((req, res, next) => {
	console.log("In the middleware")
	next()

});

app.use((req, res, next) => {
	console.log("In the middleware")

});



const server = http.createServer(app);

server.listen(3000)