const express = require("express");
const mongoose = require("mongoose");
// const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
// app.use(cors());

const areaRoutes = require("./routes/route.areas.js");
app.use("/api", areaRoutes);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("Connected to MongoDB database");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
