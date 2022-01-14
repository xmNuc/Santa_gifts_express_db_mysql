const { Router } = require('express');
const { ChildRecord } = require('../records/child.record');
const { GiftRecord } = require('../records/gift.record');

const childRouter = Router();

childRouter
  .get('/', async (req, res) => {
    const childrenList = await ChildRecord.listAll();
    const giftsList = await GiftRecord.listAll();

    res.render('children/list', {
      childrenList,
      giftsList,
    });
  })
  .post('/', async (req, res) => {
    const newChild = new ChildRecord(req.body);
    await newChild.insert();

    res.redirect('/child');
  });

module.exports = {
  childRouter,
};
