const express = require("express");
const router = express.Router();
const Area = require("../models/model.area.js");

router.get("/areas", async (req, res) => {
  try {
    const vitLocation = { latitude: 23.1881, longitude: 77.4625 };

    const areas = await Area.find({
      location: {
        $geoWithin: {
          $centerSphere: [
            [vitLocation.longitude, vitLocation.latitude],
            100 / 6371,
          ],
        },
      },
    });

    const areasWithDetails = areas.map((area) => ({
      id: area.id,
      name: area.name,
      topographicInfo: area.topographicInfo || "N/A",
      demographicData: area.demographicData || "N/A",
      population: area.population || 0,
      ageRatio: area.ageRatio || { male: 0, female: 0 },
      genderRatio: area.genderRatio || { male: 0, female: 0, other: 0 },
      marketTrend: area.marketTrend || "N/A",
    }));

    res.json(areasWithDetails);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/areas", async (req, res) => {
  try {
    const newAreaData = req.body;

    const existingArea = await Area.findOne({ name: newAreaData.name });
    if (existingArea) {
      return res
        .status(400)
        .json({ error: "Area with the same name already exists" });
    }

    const newArea = await Area.create(newAreaData);
    res
      .status(201)
      .json({ id: newArea.id, message: "Area added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/areas/:id", async (req, res) => {
  try {
    const area = await Area.findById(req.params.id);
    if (!area) {
      return res.status(404).json({ error: "Area not found" });
    }
    res.json(area);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.delete("/areas/:id", async (req, res) => {
  try {
    const area = await Area.findByIdAndDelete(req.params.id);
    if (!area) {
      return res.status(404).json({ error: "Area not found" });
    }
    res.json({ message: "Area deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
