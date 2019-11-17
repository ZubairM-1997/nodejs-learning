// const http = require("http")

const express = require("express")
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.urlencoded());
//allows us to add a middleware function
app.use('/',(req, res, next) => {
	console.log("This always runs!")
	next() //Allows the request to continue to the next middleware in line

});

app.use('/add-product',(req, res, next) => {
	console.log("In the middleware")
	res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit" />');
});

app.post("/product", (req, res, next) => {
	console.log(req.body)
	res.redirect("/")
})

app.use("/", (req, res, next) => {
	console.log("In another middleware")
	res.send("<h1> Hello from express </h1>")
})



// const server = http.createServer(app);

// server.listen(3000)
app.listen(3000)