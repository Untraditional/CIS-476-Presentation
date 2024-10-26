const Monster = require('../models/monsterModel');

class MonsterCommandService {
    async createMonster(name, level) {
      return await Monster.create({ name, level });
    }
  }
  
  module.exports = new MonsterCommandService();