//Test server, nothing to see here
const express = require("express");
const app = express();

app.listen(3001, () => {
	console.log("Application started and Listening on port 3001");
});

app.use(express.static(__dirname));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
	res.send("Thank you for subscribing");
});
