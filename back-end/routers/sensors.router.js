const express = require("express");
const router = express.Router();

const SensorInfo = require("../models/SensorInfo");

router.get("/", async (req, res) => {
  try {
    const sensorInfos = await SensorInfo.findAll({ order: [["id", "DESC"]] });

    res.json({ sensorInfos });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, value, date, coordinates } = req.body;
    const sensorInfo = {
      name,
      value,
      date,
      coordinates
    };

    const newSensorInfo = await SensorInfo.create(sensorInfo);

    res.json({ newSensorInfo });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const { name, value, date, coordinates } = req.body;
    const sensorInfo = {
      name,
      value,
      date,
      coordinates
    };

    const updatedSensorInfo = await SensorInfo.update(sensorInfo, {
      where: { id }
    });

    res.json({ updatedSensorInfo });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;

    await SensorInfo.destroy({
      where: { id }
    });

    res.json({ message: "SensorInfo was deleted successfully" });
  } catch (e) {
    res.status(500).json({ error: e });
  }
});

module.exports = router;
