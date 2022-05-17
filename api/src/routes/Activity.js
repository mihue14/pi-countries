const { Router } = require("express");
const { Country, Activity } = require("../db");
const router = Router();


router.get("/", async (req, res) => {
  const activityDB = await Activity.findAll();
  if (activityDB) {
    res.status(200).send(activityDB);
  } else {
    res.status(404).send("No activities created")
  }
})

router.post("/create", async (req, res) => {
  try {
    const { name, difficulty, duration, season, country } = req.body;

    const postActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });


    const countryDB = await Country.findAll({
      where: {
        name: country,
      },
    });

    await postActivity.addCountry(countryDB);

    res.status(200).send("Actividad creada con éxito");
  } catch (error){
    res.status(404).send(error);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const {id} = req.params

  try {
    await Activity.destroy({
      where: {
        id: id
      }
    });
    res.status(200).send("Activity deleted");
  }
  catch (error){
    res.status(404).send(error);
  }
})

router.put("/modify/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const { name, difficulty, duration, season, country } = req.body;
    await Activity.update({name, difficulty, duration, season, country}, {
      where: {
        id: id
      }
    })
    res.status(200).send("Changed activity");
  }
  catch (error) {
    console.log(error)
  }
})

module.exports = router;
