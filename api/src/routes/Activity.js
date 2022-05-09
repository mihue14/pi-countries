const { Router } = require("express");
const { Country, Activity } = require("../db");
const router = Router();

router.post("/", async (req, res) => {
  try {
    const { name, difficulty, duration, season, country } = req.body;

    const postActivity = await Activity.create({
      name,
      difficulty,
      duration,
      season,
    });
    const countryDB = await Country.findOne({
      where: {
        name: country,
      },
    });

    await postActivity.addCountry(countryDB);

    res.status(200).send("Actividad creada con éxito");
  } catch {
    res.status(404).send("Hubo un error al intentar crear la actividad");
  }
});

module.exports = router;
