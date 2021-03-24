const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema(
    {
        day: {
            type: Date,
            default: () => new Date()
        },
        exercises: [
            {
                type: {
                    type: String,
                    trim: true,
                    required: "What type of Excercise?"
                },
                name: {
                    type: String,
                    trim: true,
                    required: "Name of Excercise"
                },
                duration: Number,
                weight: Number,
                repetitions: Number,
                sets: Number,
                distance: Number
            }
        ]
    },{
        toJSON: {virtuals: true}
    }
);

workoutSchema.virtual("totalDuration").get(function() {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    }, 0);
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;