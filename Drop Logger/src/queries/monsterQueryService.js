const Monster = require('../models/monsterModel');

class MonsterQueryService {
  async getAllMonsters() {
    return await Monster.findAll();
  }

  async getMonsterById(id) {
    return await Monster.findByPk(id);
  }
}

module.exports = new MonsterQueryService();
