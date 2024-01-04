const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const areaSchema = new mongoose.Schema({
  name: String,
  topographicInfo: String,
  demographicData: String,
  population: Number,
  ageRatio: {
    male: Number,
    female: Number,
  },
  genderRatio: {
    male: Number,
    female: Number,
    other: Number,
  },
  marketTrend: String,
  location: {
    type: { type: String, default: "Point" },
    coordinates: [Number],
  },
});


areaSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

areaSchema.set("toJSON", {
  virtuals: true,
});

const Area = mongoose.model("Area", areaSchema);

module.exports = Area;
