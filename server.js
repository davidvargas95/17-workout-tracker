const express = require("express");
const mongoose = require("mongoose");

const PORT = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/workout-tracker", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
});

app.use(require("./routes/api-routes"));
app.use(require("./routes/html-routes"));

app.listen(process.env.PORT || PORT, () => {
	console.log(`App running on port ${PORT}!`);
});