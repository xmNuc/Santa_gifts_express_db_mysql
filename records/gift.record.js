const { pool } = require('../utils/db');

class GiftRecord {
  static async listAll() {
    const [results] = await pool.execute('SELECT * FROM `gifts`');
    return results;
  }
}

module.exports = {
  GiftRecord,
};
