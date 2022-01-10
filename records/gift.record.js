class GiftRecord {
  static listAll() {
    return [
      {
        id: 'abcd123',
        name: 'Car',
        count: 5,
      },
      {
        id: 'asd3453',
        name: 'Train',
        count: 3,
      },
    ];
  }
}

module.exports = {
  GiftRecord,
};
