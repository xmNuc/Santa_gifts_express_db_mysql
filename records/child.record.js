class ChildRecord {
  static listAll() {
    return [
      {
        id: 'abcd',
        name: 'Adam',
        gift: 'Car',
      },
      {
        id: 'asdsgfgh',
        name: 'Peter',
        gift: 'Train',
      },
    ];
  }
}

module.exports = {
  ChildRecord,
};
