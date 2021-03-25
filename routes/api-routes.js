const router = require("express").Router();
const Workout = require("../models/workout.js");

router.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then((dbWorkouts) => {
        res.json(dbWorkouts);
    })
    .catch((error) => {
        res.json(error);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(
        params.id,
    {$push: {exercises: body}},
    {new: true, runValidators: true}
    ).then((dbWorkouts) => {
        res.json(dbWorkouts);
    }).catch((error) => {
        res.json(error);
    });
});

router.get("/api/workouts", (req, res) => {
    Workout.find()
    .then((dbWorkouts) => {
        res.json(dbWorkouts);
    }).catch((error) => {
        res.json(error);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .limit(7)
    .then((dbWorkouts) => {
        console.log(dbWorkouts);
        res.json(dbWorkouts);
    }).catch((error) => {
        res.json(error);
    });
});

router.delete("/api/workouts", ({body}, res) => {
    Workout.findByIdAndDelete(body.id)
    .then(() => {
        res.json(true);
    }).catch((error) => {
        res.json(error);
    });
});

module.exports = router;