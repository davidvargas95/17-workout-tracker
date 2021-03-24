const express = require("express");
const mongoose = require("mongoose");

const PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


app.listen(process.env.PORT || PORT, () => {
	console.log(`App running on port ${PORT}!`);
});