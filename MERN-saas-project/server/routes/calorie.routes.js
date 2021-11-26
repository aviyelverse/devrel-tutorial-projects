const router = require("express").Router();
let Calorie = require("../models/calorie.model.js");

router.route("/").get((req, res) => {
  Calorie.find()
    .then((meals) => res.json(meals))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const calories = Number(req.body.calories);
  const date = Date.parse(req.body.date);

  const addCalorie = new Calorie({
    username,
    description,
    calories,
    date,
  });

  addCalorie
    .save()
    .then(() => res.json("Calories Added Successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Calorie.findById(req.params.id)
    .then((calories) => res.json(calories))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Calorie.findByIdAndDelete(req.params.id)
    .then(() => res.json("Calories is deleted Successfully"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").post((req, res) => {
  Calorie.findById(req.params.id)
    .then((calories) => {
      calories.username = req.body.username;
      calories.description = req.body.description;
      calories.calories = Number(req.body.calories);
      calories.date = Date.parse(req.body.date);
      calories
        .save()
        .then(() => res.json("Calorie Updated Successfully"))
        .catch((err) => res.status(400).json("Err: " + err));
    })
    .catch((err) => res.status(400).json("Err: " + err));
});

module.exports = router;
