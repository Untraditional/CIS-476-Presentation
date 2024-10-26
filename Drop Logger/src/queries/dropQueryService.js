const Drop = require('../models/dropModel');

class DropQueryService {
  async getAllDrops() {
    return await Drop.findAll();
  }

  async getDropsByMonsterId(monsterid) {
    return await Drop.findAll({ where: { monsterid } });
  }
}

module.exports = new DropQueryService();
