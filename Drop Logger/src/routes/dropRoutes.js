const express = require('express');
const dropCommandService = require('../commands/dropCommandService');
const dropQueryService = require('../queries/dropQueryService');

const router = express.Router();

// Command: Create a drop
router.post('/drops', async (req, res) => {
  const { item, quantity, monsterId } = req.body;
  try {
    const drop = await dropCommandService.createDrop(item, quantity, monsterId);
    res.status(201).json(drop);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Query: Get all drops
router.get('/drops', async (req, res) => {
  try {
    const drops = await dropQueryService.getAllDrops();
    res.status(200).json(drops);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Query: Get drops by monster ID
router.get('/drops/monster/:monsterid', async (req, res) => {
  try {
    const drops = await dropQueryService.getDropsByMonsterId(req.params.monsterid);
    res.status(200).json(drops);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
