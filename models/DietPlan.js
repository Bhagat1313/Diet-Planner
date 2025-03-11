const mongoose = require("mongoose");

const DietPlanSchema = new mongoose.Schema({
  name: String,
  calories: Number,
  category: String,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("DietPlan", DietPlanSchema);
