const express = require("express");
const Exercise = require("../models/exercise");

const exercise = express.Router();

exercise.get("/exercises", async (req, res) => {
  try {
    const exercise = await Exercise.find();
    res.json(exercise);
  } catch (error) {
    console.log(error);
  }
});

exercise.get("/exercises/:id", async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    res.json(exercise);
  } catch (error) {
    console.log(error);
  }
});

exercise.delete("/exercises/:id", async (req, res) => {
  try {
    const exercise = await Exercise.findByIdAndDelete(req.params.id);
    res.send(exercise);
  } catch (error) {
    console.log(error);
  }
});

exercise.post("/exercises/add", async (req, res) => {
  const exercise = new Exercise({
    username: req.body.username,
    description: req.body.description,
    duration: req.body.duration,
    time: req.body.time,
  });
  try {
    const e1 = await exercise.save();
    res.send(e1);
    console.log("inserted");
  } catch (error) {
    console.log(error);
  }
});

exercise.put("/exercises/update/:id", async (req, res) => {
  try {
    const exercise = await Exercise.findById(req.params.id);
    if (!exercise) {
      return res.status(404).send("Exercise not found");
    }
    // Update the exercise properties with the request body
    exercise.name = req.body.name;
    exercise.description = req.body.description;
    exercise.duration = req.body.duration;
    exercise.date = req.body.date;

    // Save the updated exercise to the database
    const updatedExercise = await exercise.save();
    res.send(updatedExercise);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server error");
  }
});

module.exports = exercise;
