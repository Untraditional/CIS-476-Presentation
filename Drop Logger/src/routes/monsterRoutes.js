const express = require('express');
const monsterCommandService = require('../commands/monsterCommandService');
const monsterQueryService = require('../queries/monsterQueryService');

const router = express.Router();

// Command: Create a monster
router.post('/monsters', async (req, res) => {
  const { name, level } = req.body;
  try {
    const monster = await monsterCommandService.createMonster(name, level);
    res.status(201).json(monster);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Query: Get all monsters
router.get('/monsters', async (req, res) => {
  try {
    const monsters = await monsterQueryService.getAllMonsters();
    res.status(200).json(monsters);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Query: Get monster by ID
router.get('/monsters/:id', async (req, res) => {
  try {
    const monster = await monsterQueryService.getMonsterById(req.params.id);
    if (monster) {
      res.status(200).json(monster);
    } else {
      res.status(404).json({ message: 'Monster not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
