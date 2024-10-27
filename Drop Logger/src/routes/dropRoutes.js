const express = require('express');
const dropCommandService = require('../commands/dropCommandService');
const dropQueryService = require('../queries/dropQueryService');
const monsterQueryService = require('../queries/monsterQueryService');

const router = express.Router();

// Command: Create a drop using the monster's name
router.post('/drops', async (req, res) => {
  const { item, quantity, monsterName } = req.body;  // Expect monsterName from the frontend
  try {
    // Find the monster by name
    const monster = await monsterQueryService.findMonsterByName(monsterName);
    
    if (!monster) {
      return res.status(404).json({ error: 'Monster not found' });
    }

    const monsterId = monster.id;  // Get the monsterId from the result

    // Create the drop using the found monsterId
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

// Query: Get drops by monster name
router.get('/drops/monster/:name', async (req, res) => {
  const monsterName = req.params.name;  // Get the monster's name from the URL

  try {
    // Find the monster by its name
    const monster = await monsterQueryService.findMonsterByName(monsterName);

    // Check if the monster exists
    if (!monster) {
      return res.status(404).json({ error: 'Monster not found' });
    }

    console.log('Monster found:', monster);  // Debugging: log the found monster

    // Get the monsterId from the found monster object
    const monsterId = monster.id;

    // Find all drops associated with this monsterId
    const drops = await dropQueryService.getDropsByMonsterId(monsterId);

    // Return the list of drops
    res.status(200).json(drops);
  } catch (error) {
    console.error('Error getting drops:', error);  // Log the error
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
