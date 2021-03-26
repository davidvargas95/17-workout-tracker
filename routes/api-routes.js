const router = require("express").Router();

const { Workout } = require("../models")

router.get("/api/workouts", (req, res) => {

    Workout.find({}).then((workout => {

        res.json(workout);

    })).catch((err) => {

        res.status(500).json(err);

    })
});

// Add workout
router.put("/api/workouts/:id", (req, res) => {
    const newExercise = req.body;

    Workout.findOneAndUpdate(
        {
            _id: req.params.id
        }, {
        $push: {
            exercises: newExercise
        }
    }, {
        new: true

    }).then((workout) => {

        res.json(workout);

    }).catch((err) => {
        res.status(500).json(err);
    })
});

router.post("/api/workouts", (req, res) => {

    Workout.create(req.body).then((workout) => {

        res.json(workout);

    }).catch((err) => {

        res.status(500).json(err);
    })
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).then((workout) => {

        console.log("Get Range");
        console.log(workout);

        res.json(workout);

    }).catch((err) => {

        res.status(500).json(err);

    })
});

module.exports = router;