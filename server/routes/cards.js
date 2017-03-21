const express = require('express');
const router = express.Router();
const db = require('../models');
const bp = require('body-parser');

let Cards = db.Card;

router.use(bp.urlencoded({extended: true}));

router.route('/')
  .get((req,res) => {
    Cards.findAll({
      order: "id",
    })
    .then((cards) => {
      console.log('cards: ', {cards});
      res.json({cardlist:{cards}});
    })
    .catch((err) => {
      res.send(err);
    });

  })

  .post((req,res) => {
    console.log("req.body: ", req.body.title);
    Cards.create({
      priority: req.body.title,
      status: req.body.status,
      title: req.body.title,
    })
    .then((card) => {
      res.send('posted bitches');
    })
    .catch(err => {
      res.send(err);
    });
  })

  .delete((req, res) => {
    Cards.destroy({

    })
  })

router.route('/:id/edit')
  .put((req,res) => {
    //may have to do find by id first depending on how i want to accomplish my edit
    Cards.update({
      priority: req.body.priority,
      status: req.body.status,
      title: req.body.title,
    },
      {where: {
        id: req.params.id,
      }
    })    
    .then((card) => {
      res.send('card correctd');
    })
    .catch(err => {
      res.send(err);
    });
  });

module.exports = router;



