const express = require("express");
const router = express.Router();
const Item = require("../models/Item");

// GET all items
router.get("/", async (req, res) => {
  const items = await Item.find().sort({ createdAt: -1 });
  res.json(items);
});

// POST new item
router.post("/", async (req, res) => {
  const { name, item, location, contact } = req.body;
  try {
    const newItem = await Item.create({ name, item, location, contact });
    res.json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
