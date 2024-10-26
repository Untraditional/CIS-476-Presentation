const Drop = require('../models/dropModel');

class DropCommandService {
  async createDrop(item, quantity, monsterId) {
    return await Drop.create({ item, quantity, monsterId });
  }
}

module.exports = new DropCommandService();
