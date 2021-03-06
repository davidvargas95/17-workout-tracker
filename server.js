const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const PORT = 3000;
const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/workout-tracker",
 	{
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false
	}
);

app.use(require("./routes/api-routes"));
app.use(require("./routes/html-routes"));

app.listen(process.env.PORT, () => {
	console.log(`App running on port ${PORT}!`);
});