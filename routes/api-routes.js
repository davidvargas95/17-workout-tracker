const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then((dbWorkout) => {
        res.json(dbbWorkout);
    })
    .catch((error) => {
        res.json(error);
    });
});



module.exports = router;