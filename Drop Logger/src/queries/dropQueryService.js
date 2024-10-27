const Drop = require('../models/dropModel');

class DropQueryService {
  async getAllDrops() {
    return await Drop.findAll();
  }

  async getDropsByMonsterId(monsterId) {
    return await Drop.findAll({ where: { monsterId } });
  }
}

module.exports = new DropQueryService();
