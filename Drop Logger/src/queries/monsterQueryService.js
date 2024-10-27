const Monster = require('../models/monsterModel');

class MonsterQueryService {
  async getAllMonsters() {
    return await Monster.findAll();
  }

  async getMonsterById(id) {
    return await Monster.findByPk(id);
  }

  async findMonsterByName(monsterName) {
    // Find the monster in the database by name
    return await Monster.findOne({ where: { name: monsterName } });
  }
}

module.exports = new MonsterQueryService();
