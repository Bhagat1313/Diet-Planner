const express = require("express");
const DietPlan = require("../models/DietPlan");

const router = express.Router();

// Create Diet Plan
router.post("/", async (req, res) => {
    try {
        const { name, calories, category, user } = req.body;
        const dietPlan = new DietPlan({ name, calories, category, user });
        await dietPlan.save();
        res.status(201).json(dietPlan);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

router.get("/", async (req, res) => {
    try {
        const dietPlans = await DietPlan.find();  // Get all records
        if (!dietPlans.length) {
            return res.status(404).json({ message: "No diet plans found" });
        }
        res.json(dietPlans);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});


// Search Diet Plans
router.get("/search", async (req, res) => {
    try {
        const { category } = req.query;
        const dietPlans = await DietPlan.find({ category: new RegExp(category, "i") });
        res.json(dietPlans);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Update Diet Plan
router.put("/:id", async (req, res) => {
    try {
        const dietPlan = await DietPlan.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(dietPlan);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Delete Diet Plan
router.delete("/:id", async (req, res) => {
    try {
        await DietPlan.findByIdAndDelete(req.params.id);
        res.json({ message: "Diet Plan deleted" });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
