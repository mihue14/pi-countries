const { Router } = require("express");
const axios = require("axios");
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const router = Router();

const ApiToDb = async () => {
  try {
    const api = await axios.get("https://restcountries.com/v3/all");
    const data = api.data.map((c) => {
      return {
        id: c.cca3,
        name: c.name.common,
        flag: c.flags[0],
        continent: c.continents[0],
        subregion: c.subregion,
        capital: c.capital ? c.capital[0] : "",
        population: c.population,
        area: c.area,
      };
    });
    await Country.bulkCreate(data);
  } catch (error) {
    console.log(error);
  }
};

router.get("/", async (req, res) => {
  const { name } = req.query;

  const COUNTRYDB = await Country.findAll({
    include: {
      model: Activity,
      attributes: ["name", "difficulty", "duration", "season"],
      through: {
        attributes: [],
      },
    },
  });
  if (!COUNTRYDB.length) {
    await ApiToDb();
  }
  if (name) {
    const countryByName = await Country.findAll({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      include: {
        model: Activity,
        attributes: ["name", "difficulty", "duration", "season"],
        through: {
          attributes: [],
        },
      },
    });
    if (countryByName.length) {
      res.status(200).send(countryByName);
    } else {
      res.status(404).send("No se encontró el país");
    }
  } else {
    res.status(200).send(COUNTRYDB);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const countryByID = await Country.findOne({
    where: {
      id: id,
    },
    include: {
      model: Activity,
      attributes: ["id", "name", "difficulty", "duration", "season"],
      through: {
        attributes: [],
      },
    },
  });

  countryByID
    ? res.status(200).send(countryByID)
    : res.status(404).send("País no encontrado");
});

module.exports = router;
