const { pool } = require('../utils/db');
const { ValidationError } = require('../utils/error');
const { v4: uuid } = require('uuid');

class GiftRecord {
  constructor(obj) {
    if (!obj.name || obj.name.length < 3 || obj.name.length > 55) {
      throw new ValidationError('Gift name should be min 3 max 55 characters.');
    }
    if (!obj.count || obj.count.length < 1 || obj.count.length > 999999) {
      throw new ValidationError('Gifts should be min 1 max 999999.');
    }
    this.id = obj.id;
    this.name = obj.name;
    this.count = obj.count;
  }

  async insert() {
    if (!this.id) {
      this.id = uuid();
    }
    pool.execute('INSERT INTO `gifts` VALUES(:id, :name, :count)', {
      id: this.id,
      name: this.name,
      count: this.count,
    });
  }

  static async listAll() {
    const [results] = await pool.execute('SELECT * FROM `gifts`');
    return results;
  }
}

module.exports = {
  GiftRecord,
};
